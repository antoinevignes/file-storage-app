import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <div className="py-4">
      <div className="items-center container mx-auto flex justify-between">
        <div>FDrive</div>
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
