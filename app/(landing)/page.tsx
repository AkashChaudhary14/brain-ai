import { Button } from "@/components/ui/button";
import Link from "next/link";
const landingPage = () => {
    return (  
        <div>
         Landing Page (Unprotected)
         <div>
         <Link href="/sign-in">
            <Button>
               Sign-in 
            </Button>
            </Link>
         </div>
         <div>
         <Link href="/sign-up">
            <Button>
               Sign-up 
            </Button>
            </Link>
         </div>
        </div>
    );
}
export default landingPage;
