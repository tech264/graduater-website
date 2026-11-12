import { useState } from "react";
import { Download, ShieldCheck, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, countries, levels, businessContact } from "@/data/catalog";
import { Banner } from "./shared";
export function EnquiryPage({ contact = false }: { contact?: boolean }) {
  return (
    <>
      <Banner
        title={contact ? "Let’s Start a Conversation." : "Your Next Chapter Starts Here."}
        description={
          contact
            ? "Tell us what is on your mind. Let’s explore your global education possibilities."
            : "A big ambition deserves a personal approach. Tell us about yourself and the future you have in mind."
        }
      />
      <section className="section">
        <div className="wrap enquiry-layout">
          <div>
            <div className="eyebrow">{contact ? "Contact GRADUATER" : "Free counselling"}</div>
            <h2>
              {contact
                ? "We’re here for your next step."
                : "Your goals. Your journey. Our guidance."}
            </h2>
            <p className="body-copy">
              Explore courses and destinations, discuss your academic background and understand the
              steps ahead.
            </p>
            {contact ? (
              <>
                <div className="contact-placeholder">
                  <h3>
                    <Mail className="size-4 text-primary" />
                    Email
                  </h3>
                  <p>{businessContact.email || "Business email awaiting confirmation."}</p>
                </div>
                <div className="contact-placeholder">
                  <h3>
                    <Phone className="size-4 text-primary" />
                    Phone & WhatsApp
                  </h3>
                  <p>
                    {businessContact.phone || "Phone and WhatsApp details awaiting confirmation."}
                  </p>
                  {businessContact.whatsapp && (
                    <Button variant="link" asChild>
                      <a
                        href={`https://wa.me/${businessContact.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp <MessageCircle />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="contact-placeholder">
                  <h3>
                    <MapPin className="size-4 text-primary" />
                    Visit us
                  </h3>
                  <p>{businessContact.address || "Office address awaiting confirmation."}</p>
                </div>
                <div className="map-placeholder">
                  Office map will be added once the address is confirmed.
                </div>
              </>
            ) : (
              <div className="mt-8 space-y-4 text-sm">
                {[
                  "Personalised course and country guidance",
                  "Application and documentation support",
                  "Funding, visa and pre-departure guidance",
                ].map((s) => (
                  <p key={s} className="flex gap-3">
                    <ShieldCheck className="size-5 text-primary shrink-0" />
                    {s}
                  </p>
                ))}
              </div>
            )}
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
export function EnquiryForm() {
  const [draft, setDraft] = useState<Record<string, string> | null>(null),
    [downloaded, setDownloaded] = useState(false);
  function download() {
    if (!draft) return;
    const blob = new Blob(
      [
        "GRADUATER COUNSELLING ENQUIRY DRAFT\nNot submitted — share with GRADUATER when contact details are available.\n\n" +
          Object.entries(draft)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
      ],
      { type: "text/plain;charset=utf-8" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "graduater-enquiry-draft.txt";
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  }
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
          string,
          string
        >;
        setDraft(data);
        setDownloaded(false);
      }}
    >
      <div className="form-wide">
        <h3 className="text-xl mb-3">Tell us about your plans.</h3>
        <div className="form-note">
          Enquiry delivery is not connected yet. You can prepare and download your details; nothing
          is sent or stored by GRADUATER.
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="full-name">Full Name *</label>
        <input
          id="full-name"
          name="Full Name"
          required
          minLength={2}
          autoComplete="name"
          placeholder="Your full name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          name="Phone"
          type="tel"
          required
          pattern="[+0-9 ()-]{7,20}"
          title="Enter 7–20 characters using digits, spaces, +, brackets or hyphens"
          autoComplete="tel"
          placeholder="Your phone number"
        />
      </div>
      <div className="form-field">
        <label htmlFor="education">Current Education Level *</label>
        <select id="education" name="Current Education" required defaultValue="">
          <option value="" disabled>
            Select your education
          </option>
          {[
            "Plus Two / Higher Secondary",
            "Bachelor's degree",
            "Master's degree",
            "Diploma",
            "Other",
          ].map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="interested-course">Interested Course</label>
        <select id="interested-course" name="Interested Course" defaultValue="">
          <option value="">Still exploring</option>
          {courses.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="preferred-country">Preferred Country</label>
        <select id="preferred-country" name="Preferred Country" defaultValue="">
          <option value="">Open to possibilities</option>
          {countries.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="intake">Preferred Intake</label>
        <input id="intake" name="Preferred Intake" type="month" />
      </div>
      <div className="form-field">
        <label htmlFor="desired-level">Interested Study Level</label>
        <select id="desired-level" name="Study Level">
          <option>Still exploring</option>
          {levels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>
      <div className="form-field form-wide">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="Message"
          rows={4}
          placeholder="Tell us about your academic goals or any questions you have."
          maxLength={3000}
        />
      </div>
      <div className="form-wide">
        <Button type="submit" variant="yellow" className="h-12 w-full">
          Prepare My Enquiry <Download />
        </Button>
        <p className="small-label mt-3">
          Your information stays in this page until you download it. No admission or visa outcome is
          guaranteed.
        </p>
      </div>
      {draft && (
        <div className="form-result form-wide" role="status">
          <h3>Your enquiry draft is ready — not submitted.</h3>
          <p>
            Download your details for your records. Contact information and enquiry delivery are
            awaiting configuration.
          </p>
          <Button variant="outline" type="button" onClick={download}>
            <Download />
            {downloaded ? "Download Again" : "Download Enquiry Draft"}
          </Button>
        </div>
      )}
    </form>
  );
}
