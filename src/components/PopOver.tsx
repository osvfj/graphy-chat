import {
  Text,
  Popover,
  Highlight,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SystemStyleObject,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  query: string;
  styles?: SystemStyleObject;

  trigger: string;
  header: ReactNode;
  children: ReactNode;
}

export function PopOver({ trigger, header, query, styles, children }: Props) {
  return (
    <Popover>
      <PopoverTrigger>
        <Text as="strong" size="md">
          <Highlight query={query} styles={styles}>
            {trigger}
          </Highlight>
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader as="strong">{header}</PopoverHeader>
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
