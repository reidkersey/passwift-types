export interface table_users {
  createdAt: number;
  userId: string;
  logins: Logins[];
  organizationId: string;
  projectId: string;
  protectedUserData?: any;
  unprotectedUserData?: any;
  authProviderData?: AuthProviderData;
  metadata: UserMetadata;
}

export interface UserMetadata extends Partial<OAuth2StandardClaims> {
  userIdentifier: string;
  lastLogin?: number;
  disabled: boolean;
  scopes: string[];
}

export interface Logins {
  username: string;
  password?: string;
  salt?: string;
  forgotPasswordCode?: string;
  forgotPasswordExpiration?: number;
  provider: Providers;
}

export type LoginsReturnable = Omit<
  Logins,
  "password" | "salt" | "forgotPasswordCode"
>;

export interface table_users_returnable extends Omit<table_users, "logins"> {
  logins: LoginsReturnable[];
}

export type Providers = "passwift" | "google";

export interface AuthProviderData {
  google?: GoogleAuthProviderData;
  passwift?: OAuth2StandardClaims;
}

export interface GoogleAuthProviderData extends OAuth2StandardClaims {
  hd?: string;
  other: any;
}

// standard claims from the RFC https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
export interface OAuth2StandardClaims {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_number_verified?: string;
  address?: {
    formatted?: string;
    street_address?: string;
    locality?: string;
    region?: string;
    postal_code?: string;
    country?: string;
  };
  updated_at?: number;
}

export const _OAuth2StandardAddressClaims = [
  "formatted",
  "street_address",
  "locality",
  "region",
  "postal_code",
  "country",
];

export const _OAuth2StandardClaims = [
  "sub",
  "name",
  "given_name",
  "family_name",
  "middle_name",
  "nickname",
  "preferred_username",
  "profile",
  "picture",
  "website",
  "email",
  "email_verified",
  "gender",
  "birthdate",
  "zoneinfo",
  "locale",
  "phone_number",
  "phone_number_verified",
  "address",
  "updated_at",
];
