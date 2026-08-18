"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  LogOut,
  Settings,
  User,
  UserPen,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useProfile } from "@/features/profile/hooks/useProfile";
import { authService } from "@/features/auth/services/auth.service";

function getInitials(
  name: string | null | undefined
): string {
  if (!name?.trim()) {
    return "";
  }

  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function UserMenu() {
  const router = useRouter();

  const {
    profile,
    isLoading,
    error,
  } = useProfile();

  const [isLoggingOut, setIsLoggingOut] =
    useState(false);

  const [logoutError, setLogoutError] =
    useState<string | null>(null);

  const fullName = profile?.full_name?.trim() || "";
  const email = profile?.email?.trim() || "";
  const avatarUrl = profile?.avatar_url?.trim() || "";

  const initials = getInitials(fullName);

  const handleMyProfile = () => {
    router.push("/profile");
  };

  const handleEditProfile = () => {
    router.push("/profile/edit");
  };

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    setLogoutError(null);
    setIsLoggingOut(true);

    try {
      const result = await authService.logout();

      if (!result.success) {
        setLogoutError(
          result.error || "Unable to log out. Please try again."
        );

        return;
      }

      router.replace("/login");
    } catch (error: unknown) {
      setLogoutError(
        error instanceof Error
          ? error.message
          : "Unable to log out. Please try again."
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <DropdownMenu>
      {/* Profile Avatar Trigger */}
      <DropdownMenuTrigger
        aria-label="Open profile menu"
        disabled={isLoggingOut}
        className="group relative rounded-full outline-none transition-transform duration-150 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Avatar
          size="default"
          className="h-10 w-10 border-2 border-slate-200/90 shadow-sm transition-all duration-200 group-hover:border-blue-500/80 group-hover:shadow-blue-500/10"
        >
          {!isLoading && avatarUrl && (
            <AvatarImage
              src={avatarUrl}
              alt={fullName || "Profile"}
              className="object-cover"
            />
          )}

          <AvatarFallback className="bg-gradient-to-br from-blue-50 to-indigo-50 font-bold text-blue-900">
            {initials || (
              <User className="h-4 w-4 text-blue-800/80" />
            )}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      {/* Profile Dropdown */}
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={8}
        className="w-64"
      >
        {/* User Information */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="py-2">
            <div className="flex items-center gap-3">
              <Avatar
                size="default"
                className="h-11 w-11 border-2 border-blue-100 shadow-sm"
              >
                {!isLoading && avatarUrl && (
                  <AvatarImage
                    src={avatarUrl}
                    alt={fullName || "Profile"}
                    className="object-cover"
                  />
                )}

                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
                  {initials || (
                    <User className="h-5 w-5 text-white" />
                  )}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                {isLoading ? (
                  <>
                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />

                    <div className="mt-1 h-3 w-32 animate-pulse rounded bg-muted" />
                  </>
                ) : error ? (
                  <>
                    <p className="truncate text-sm font-medium">
                      Profile
                    </p>

                    <p className="truncate text-xs text-muted-foreground">
                      Unable to load profile
                    </p>
                  </>
                ) : (
                  <>
                    <p className="truncate text-sm font-medium">
                      {fullName || "User"}
                    </p>

                    <p className="truncate text-xs text-muted-foreground">
                      {email || "Account"}
                    </p>
                  </>
                )}
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* My Profile */}
        <DropdownMenuItem
          onClick={handleMyProfile}
          disabled={isLoggingOut}
          className="cursor-pointer"
        >
          <User className="h-4 w-4" />
          <span>My Profile</span>
        </DropdownMenuItem>

        {/* Edit Profile */}
        <DropdownMenuItem
          onClick={handleEditProfile}
          disabled={isLoggingOut}
          className="cursor-pointer"
        >
          <UserPen className="h-4 w-4" />
          <span>Edit Profile</span>
        </DropdownMenuItem>

        {/* My Progress */}
        <DropdownMenuItem disabled>
          <BarChart3 className="h-4 w-4" />

          <span className="flex-1">
            My Progress
          </span>

          <span className="text-[10px] text-muted-foreground">
            Soon
          </span>
        </DropdownMenuItem>

        {/* Settings */}
        <DropdownMenuItem disabled>
          <Settings className="h-4 w-4" />

          <span className="flex-1">
            Settings
          </span>

          <span className="text-[10px] text-muted-foreground">
            Soon
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout Error */}
        {logoutError && (
          <div
            role="alert"
            className="mx-1 mb-1 rounded-md bg-destructive/10 px-2 py-2 text-xs text-destructive"
          >
            {logoutError}
          </div>
        )}

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoggingOut}
          variant="destructive"
          className="cursor-pointer"
        >
          <LogOut className="h-4 w-4" />

          <span>
            {isLoggingOut
              ? "Logging out..."
              : "Logout"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;