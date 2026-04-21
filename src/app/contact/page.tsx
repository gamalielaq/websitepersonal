import { redirect } from "next/navigation";
import { LINKEDIN_URL } from "@/content/social-links";

export default function ContactPage() {
    redirect(LINKEDIN_URL);
}
