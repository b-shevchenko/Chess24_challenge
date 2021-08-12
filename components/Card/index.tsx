import { StyledCard, StyledCardTitle } from "./styles";
import { Props } from "./types";
import Link from "next/link";

export const Card: React.FC<Props> = (props: Props) => {
  const { title } = props;
  return (
    <Link href={`/detail/${title}`} passHref>
      <StyledCard>
        <StyledCardTitle>
          <h3>{title}</h3>
        </StyledCardTitle>
      </StyledCard>
    </Link>
  )
}