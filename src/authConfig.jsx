export const msalConfig = {
  auth: {
    clientId: "087d5427-2255-48c9-869e-9428f0a88b20",
    authority:
      "https://login.microsoftonline.com/5030b96a-04c0-4332-92a2-b935cadbb142",
    redirectUri: "https://shamil.riyadhholding.sa",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: [
    "User.Read",
    "Tasks.Read",
    // "Group.Read.All",
    "Calendars.Read",
    "Sites.Read.All",
  ],
};
