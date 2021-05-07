import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onClick: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
    const { onClick } = props;
    return (
        <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            size="sm"
            variant="unstyled"
            display={{ base: " block", md: "none" }}
            onClick={onClick}
        />
    )
});