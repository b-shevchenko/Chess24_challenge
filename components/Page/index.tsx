import { StyledPage, StyledHeader, StyledFooter, StyledContentContainer, StyledContent } from "./styles";
import { Props } from "./types";
import Image from "next/image"
import Link from "next/link";

export const Page: React.FC<Props> = (props: Props) => {
  const { children, headerContent, footerContent, returnButton } = props;
  const Footer = () => (
    <StyledFooter>
      {footerContent}
    </StyledFooter>
  )

  const Header = () => (
    <StyledHeader>
      {returnButton &&
        <div>
          <Link href="/" passHref>
            <Image src="/arrow_right.svg" alt="back" height={25} width={25} />
          </Link>
        </div>
      }
      <Image src="/chess_logo.png" width={50} height={50} alt="chess logo" />
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