import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import PrismaButton from "./PrismaButton.vue";

describe("PrismaButton.vue", () => {
  it("deve renderizar com o slot padrão", () => {
    render(PrismaButton, {
      slots: { default: "Clique Aqui" },
    });

    expect(screen.getByRole("button")).toHaveTextContent("Clique Aqui");
  });

  it('deve aplicar a classe padrão "prisma-button"', () => {
    render(PrismaButton);
    expect(screen.getByRole("button")).toHaveClass("prisma-button");
  });

  // Testes para as variantes do botão
  it('deve aplicar a classe "prisma-button--contabil" para o variant "contabil"', () => {
    render(PrismaButton, {
      props: { variant: "contabil" },
    });

    expect(screen.getByRole("button")).toHaveClass("prisma-button--contabil");
  });

  it('deve aplicar a classe "prisma-button--outline" para o variant "outline"', () => {
    render(PrismaButton, {
      props: { variant: "outline" },
    });

    expect(screen.getByRole("button")).toHaveClass("prisma-button--outline");
  });

  it('deve aplicar a classe "prisma-button--link" para o variant "link"', () => {
    render(PrismaButton, {
      props: { variant: "link" },
    });

    expect(screen.getByRole("button")).toHaveClass("prisma-button--link");
  });

  // Testes para o estado desabilitado do botão
  it('deve desabilitar o botão quando a propriedade "disabled" for verdadeira', () => {
    render(PrismaButton, {
      props: { disabled: true },
      slots: { default: "Botão Desabilitado" },
    });

    const button = screen.getByRole("button", { name: "Botão Desabilitado" });
    expect(button).toBeDisabled();
  });

  // Testes para o tamanho do botão
  it('deve aplicar a classe "prisma-button--small" para o tamanho pequeno', () => {
    render(PrismaButton, {
      props: { size: "small" },
    });

    expect(screen.getByRole("button")).toHaveClass("prisma-button--small");
  });

  it('deve aplicar a classe "prisma-button--large" para o tamanho grande', () => {
    render(PrismaButton, {
      props: { size: "large" },
    });

    expect(screen.getByRole("button")).toHaveClass("prisma-button--large");
  });
});
