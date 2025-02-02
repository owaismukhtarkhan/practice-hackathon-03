import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "4da9tkgp",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
  token: "skTJC5cDLZqOKunYY0Q5WvIWWphZaocV8Lc5Io1CuA0Reh3ri1JAjPnN1rPpZiF4x1l0GSG043eaFCbNiVtG2E5JW3OtCDDFgGMkRwTOEJcc59IdOy3dFmqJIzsaz1b3kiIt18KdzLnepNbA8nMAbc99NJZakNO4VSauogAfUs3bMdAXHxoN",
});

export default client;
