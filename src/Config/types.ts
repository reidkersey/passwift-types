export interface PasswiftPolicy {
  name: string;
  policy: string;
}

export interface PasswiftScopeGroup {
  group: string;
  scopes: string[];
}

type PasswordCategory = "Number" | "Uppercase" | "Lowercase" | "Special";

export interface PrivatePasswiftConfig extends PublicPasswiftConfig {
  privateAPIKey: string;
}

export interface PublicPasswiftConfig {
  endpoint: string;
  publicAPIKey: string;
  passwordRequirements: {
    minLength: number;
    mustInclude: PasswordCategory[];
    minCategories: number;
  };
  keySettings: {
    audience: string | string[];
  };
  usernameRequirements: {
    isEmail: boolean;
  };
  policies: PasswiftPolicy[];
  oauth: {
    redirect_uri: string;
    google: {
      clientId: string;
    };
  };
  scopeGroups: PasswiftScopeGroup[];
}
