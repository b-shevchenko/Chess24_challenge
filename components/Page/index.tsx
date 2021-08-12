import { StyledPage, StyledHeader, StyledFooter, StyledContentContainer, StyledContent } from "./styles";
import { Props } from "./types";
import Image from "next/image"

export const Page: React.FC<Props> = (props: Props) => {
  const { children, headerContent, footerContent } = props;

  const Footer = () => (
    <StyledFooter>
      {footerContent}
    </StyledFooter>
  )

  const Header = () => (
    <StyledHeader>
      <Image src="/chess_logo.svg" alt="chess logo" />
      {headerContent}
    </StyledHeader>
  )

  return (
    <StyledPage>
      {headerContent && <Header />}
      <StyledContentContainer>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledContentContainer>
      {footerContent && <Footer />}
    </StyledPage>
  )
}