import calendarApi from "../../src/api/calendarApi";


describe('Pruebas en el calendarApi', () => {

  test("Debe tener la configuración por defecto", () => {

    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);


  });

  test('Debe tener el x-token en el header de todas las peticiones', async () => {

    localStorage.setItem("token", "ABC-123-XYZ");

    const res = await calendarApi.get("/auth");

    expect (res.config.headers["x-token"]).toBe("ABC-123-XYZ")
  });
});
