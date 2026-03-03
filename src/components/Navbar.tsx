import { useEffect, useState } from "react";
import styled from "styled-components";

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: ${({ theme }) => theme.colors.base}80;
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid
    ${({ theme, $scrolled }) =>
      $scrolled ? theme.colors.surface0 : "transparent"};
  transition: border-color 0.2s ease;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};

  @media (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  }
`;

const Brand = styled.p`
  cursor: default;
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
  position: relative;
  z-index: 201;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25em;
  height: 2.25em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 201;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    display: none;
  }
`;

const IconWrap = styled.span<{ $visible: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "rotate(0deg)" : "rotate(90deg)")};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
`;

const MobileOverlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  z-index: 150;
  background-color: ${({ theme }) => theme.colors.crust};
  opacity: 0.5;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 160;
  background-color: ${({ theme }) => theme.colors.base};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[6]}`};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const MobileNavLink = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.mobile["2xl"]};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  border-radius: ${({ theme }) => theme.radii.md};
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
`;

const DesktopLinks = styled.ul`
  display: none;
  list-style: none;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[2]};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  border: 1px solid transparent;

  transition:
    border 0.1s ease,
    box-shadow 0.15s ease,
    transform 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lavender};
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.lavender};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

const NavLinkIndex = styled.span`
  color: ${({ theme }) => theme.colors.lavender};
`;

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "#") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Inner>
          <Brand>Thanapong Angkha</Brand>
          <HamburgerButton
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <IconWrap $visible={!open}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.75em"
                height="1.75em"
                aria-hidden="true"
              >
                <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4zM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" />
              </svg>
            </IconWrap>
            <IconWrap $visible={open}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.75em"
                height="1.75em"
                aria-hidden="true"
              >
                <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" />
              </svg>
            </IconWrap>
          </HamburgerButton>
          <DesktopLinks>
            {NAV_LINKS.map(({ label, href }, index) => (
              <li key={label}>
                <NavLink href={href} onClick={(e) => handleNavClick(e, href)}>
                  <NavLinkIndex>
                    {String(index + 1).padStart(2, "0")}.{" "}
                  </NavLinkIndex>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </DesktopLinks>
        </Inner>
      </Nav>

      <MobileOverlay $open={open} onClick={() => setOpen(false)} />

      <MobileMenu $open={open}>
        <MobileLinks>
          {NAV_LINKS.map(({ label, href }, index) => (
            <li key={label}>
              <MobileNavLink
                href={href}
                onClick={(e) => {
                  handleNavClick(e, href);
                  setOpen(false);
                }}
              >
                <NavLinkIndex>
                  {String(index + 1).padStart(2, "0")}.{" "}
                </NavLinkIndex>
                <span>{label}</span>
              </MobileNavLink>
            </li>
          ))}
        </MobileLinks>
      </MobileMenu>
    </>
  );
}

export default Navbar;
