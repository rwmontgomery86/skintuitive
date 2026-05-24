import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export function FloatingCTA() {
  return (
    <div className="floating-cta">
      <ButtonLink variant="ghost" href={site.phone.href}>Call</ButtonLink>
      <ButtonLink variant="primary" href={site.booking.href}>Book Now</ButtonLink>
    </div>
  );
}
