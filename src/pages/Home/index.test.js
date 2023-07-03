import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";



describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const listEvents = screen.queryAllByTestId("card-image-testid");
    expect(listEvents.length).toBe(9);
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("Christine");
    await screen.findByText("CXO");
    await screen.findByText("VP communication");
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Une agence événementielle propose des prestations de service spécialisées dans la conception et l'organisation de divers événements tels que des événements festifs, des manifestations sportives et culturelles, des événements professionnels");
  });
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre derniére prestation");
  })
});
