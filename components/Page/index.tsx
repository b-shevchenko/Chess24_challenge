import { StyledPage, StyledHeader, StyledFooter } from "./styles";
import { Props } from "./types";


export const Page: React.FC<Props> = (props: Props) => {
  const { children, headerContent, footerContent } = props;

  const Footer = () => (
    <StyledFooter>
      {footerContent}
    </StyledFooter>
  )

  const Header = () => (
    <StyledHeader>
      <img src="/chess_logo.svg" />
      {headerContent}
    </StyledHeader>
  )

  return (
    <StyledPage>
      {headerContent && <Header />}
      {children}
      {footerContent && <Footer />}
    </StyledPage>
  )
}