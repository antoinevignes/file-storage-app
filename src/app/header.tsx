import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { CloudUpload } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="py-4">
      <div className="items-center container mx-auto flex justify-between">
        <Link href="/" className="flex gap-4 items-center text-xl">
          <CloudUpload width="40" height="40" />
          FDrive
        </Link>

        <Button variant="outline">
          <Link href="/dashboard/files">Your files</Link>
        </Button>
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
