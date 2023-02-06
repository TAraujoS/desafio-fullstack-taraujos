describe("Register", () => {
  it("Enters the landing page", () => {
    cy.visit("");
    cy.viewport(1440, 900);
  });

  it("Tries to register", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=name]").type("Kenzinho");
    cy.get("input[id=email]").type("kenzie@mail.com");
    cy.get("input[id=password]").type("Ken12345*");
    cy.get("input[id=confirm-password]").type("Ken12345*");
    cy.get("input[id=phone]").type("2740028922");

    cy.contains("Cadastrar");

    cy.get("button[type=submit]").click();
  });

  it("Tries to login", () => {
    cy.visit("/login");
    cy.viewport(1440, 900);

    cy.get("input[id=email]").type("kenzie@mail.com");
    cy.get("input[id=password]").type("Ken12345*");

    cy.contains("Entrar");

    cy.get("button[type=submit]").click();
  });

  it("Tries to create contact", () => {
    cy.visit("/dashboard");
    cy.viewport(1440, 900);

    cy.get("input[name=name]").type("Contato1");
    cy.get("input[name=email]").type("contato@mail.com");
    cy.get("input[name=phone]").type("2799990000");

    cy.contains("Adicionar Contato");

    cy.get("button[type=submit]").click();
  });

  it("Tries to logout", () => {
    cy.visit("/dashboard");
    cy.viewport(1440, 900);

    cy.contains("Sair");

    cy.get(".logout").click();

    cy.url().should("include", "/login");
  });
});
