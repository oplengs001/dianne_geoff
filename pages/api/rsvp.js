import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const { name, email, number, attending } = body;

    try {
      // Add RSVP to Firestore
      await addDoc(collection(db, "rsvps"), {
        name,
        email,
        number,
        attending,
        createdAt: new Date(),
      });

      // Send confirmation email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your RSVP Confirmation for Our Wedding!",
        html: `
            <p>Dear ${name},</p>
            <p>Thank you for your RSVP! We are thrilled to confirm your attendance at our wedding. Here are the details:</p>
            
            <h3>Wedding Date</h3>
            <p><strong>November 30, 2024</strong></p>
            
           <h3>Ceremony Location</h3>
            <p><strong>Sta. Clara Parish Church</strong><br>
            Santo Tomas-Lipa Road, Poblacion, Sta. Clara<br>
            Sto. Tomas, 4234 Batangas, Philippines<br>
            <strong>Time:</strong> 2:00 PM<br>
            <a href="https://www.google.com/maps/place/Sta.+Clara+Parish+Church+-+Barangay+Santa+Clara,+City+of+Sto.+Tomas,+Batangas/@14.027398,121.1991239,15.75z/data=!4m6!3m5!1s0x33bd6911e6553b17:0x700e9304bdd9768e!8m2!3d14.0269244!4d121.2041274!16s%2Fg%2F11bzvvccdb?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD" target="_blank">View on Google Maps</a>
            </p>
            
            <h3>Reception Location</h3>
            <p><strong>Gunita Villas and Pavilion</strong><br>
            Gunita Villas and Pavilion, Santo Tomas<br>
            Lipa Rd, Santo Tomas, 4234 Batangas<br>
            <strong>Time:</strong> 3:00 PM<br>
            <a href="https://www.google.com/maps/place/Gunita+Villas+and+Pavilion/@14.0322655,121.1907444,17z/data=!4m9!3m8!1s0x33bd690f96d2152b:0xa34542790f83369d!5m2!4m1!1i2!8m2!3d14.0322655!4d121.1933193!16s%2Fg%2F11frq2g3mx?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank">View on Google Maps</a>
            </p>
        
            <p>We can't wait to celebrate this special day with you! If you have any questions or need further information, feel free to reach out </p>
            
            <p>Warm regards,<br>
            <strong>Geoffrey and Dianne</strong></p>
        `,
      };

      const coupleEmailOption = {
        from: process.env.EMAIL_USER,
        to: ["fernandezdianne14@gmail.com", "oplengs@gmail.com"],
        subject: `${name} is ${
          attending === "yes" ? "attending" : "not attending"
        }  our Wedding!`,
        html: `
            <p>Hi Love! <b>${name}</b> is <b>${
          attending === "yes" ? "attending" : "not attending"
        } </b> our wedding,</p>
            <a href="https://dianne-geoff.vercel.app/guests" target="_blank">View guest list</a>
        `,
      };

      if (attending) await transporter.sendMail(mailOptions);
      await transporter.sendMail(coupleEmailOption);
      return res.status(200).json({ message: "RSVP received!" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Failed to submit RSVP or send email" });
    }
  } else if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "rsvps"));
      const rsvps = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(200).json(rsvps);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch RSVPs" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
