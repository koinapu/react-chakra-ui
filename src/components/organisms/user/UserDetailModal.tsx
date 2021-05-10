import { memo, VFC } from "react";
import { Stack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>ユーザ詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="ほげ" readOnly />
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="ほげえもん" readOnly />
                            <FormLabel>Mail</FormLabel>
                            <Input value="12345@example.com" readOnly />
                            <FormLabel>電話番号</FormLabel>
                            <Input value="000-123-4567" readOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
});