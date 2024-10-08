import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { CloudUpload } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 py-4">
      <div className="items-center container mx-auto flex justify-between">
        <Link href="/" className="flex gap-4 items-center text-xl">
          <CloudUpload width="40" height="40" />
          FDrive
        </Link>

        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Your files</Link>
          </Button>
        </SignedIn>
        <div className="flex gap-4">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
