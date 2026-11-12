import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const previews = [
  { title: "Finding a course that feels right", journey: "Undergraduate journey" },
  { title: "Taking the next academic step", journey: "Postgraduate journey" },
  { title: "Turning curiosity into possibility", journey: "Research journey" },
];

export function TestimonialPreview() {
  const [active, setActive] = useState(0);
  const preview = previews[active];
  if (!preview) return null;
  return (
    <section className="student-preview" aria-label="Student testimonial previews">
      <div className="wrap student-preview-inner">
        <div className="student-preview-heading">
          <div className="eyebrow">Every ambition has a story</div>
          <h2>
            New perspectives.
            <br />
            Global possibilities.
          </h2>
          <p>Student testimonials awaiting approved content.</p>
        </div>
        <article className="preview-quote" aria-live="polite">
          <Quote className="preview-quote-icon" />
          <div>
            <span className="sample-label">Testimonial placeholder · Not a student review</span>
            <h3>{preview.title}</h3>
            <div className="preview-person">
              <UserRound />
              <span>
                {preview.journey}
                <small>Student details awaiting permission</small>
              </span>
            </div>
          </div>
        </article>
        <div className="preview-controls">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous testimonial preview"
            onClick={() => setActive((active + 2) % 3)}
          >
            <ArrowLeft />
          </Button>
          <span>0{active + 1} / 03</span>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next testimonial preview"
            onClick={() => setActive((active + 1) % 3)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
