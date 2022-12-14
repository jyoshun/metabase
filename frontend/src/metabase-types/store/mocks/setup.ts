import {
  DatabaseDetails,
  DatabaseInfo,
  InviteInfo,
  Locale,
  SetupState,
  SubscribeInfo,
  UserInfo,
} from "metabase-types/store";

export const createMockLocale = (opts?: Partial<Locale>): Locale => ({
  name: "English",
  code: "en",
  ...opts,
});

export const createMockUserInfo = (opts?: Partial<UserInfo>): UserInfo => ({
  first_name: "Test",
  last_name: "Testy",
  email: "testy@dataman.test",
  site_name: "Epic Team",
  password: "",
  password_confirm: "",
  ...opts,
});

export const createMockInviteInfo = (
  opts?: Partial<InviteInfo>,
): InviteInfo => ({
  first_name: "Test",
  last_name: "Testy",
  email: "testy@dataman.test",
  ...opts,
});

export const createMockDatabaseDetails = (
  opts?: Partial<DatabaseDetails>,
): DatabaseDetails => ({
  ssl: false,
  ...opts,
});

export const createMockDatabaseInfo = (
  opts?: Partial<DatabaseInfo>,
): DatabaseInfo => ({
  name: "Database",
  engine: "H2",
  details: createMockDatabaseDetails(),
  ...opts,
});

export const createMockSubscribeInfo = (
  opts?: Partial<SubscribeInfo>,
): SubscribeInfo => ({
  email: "testy@dataman.test",
  ...opts,
});

export const createMockSetupState = (
  opts?: Partial<SetupState>,
): SetupState => ({
  step: 0,
  isLocaleLoaded: false,
  isTrackingAllowed: false,
  ...opts,
});
