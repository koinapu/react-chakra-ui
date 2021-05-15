import { memo, VFC } from "react";
import { Stack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { User } from "../../../types/api/user";

type Props = {
    user: User | null | undefined;
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, onClose } = props;
    //alert(user?.name);
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
                            <Input value={user?.username} readOnly />
                            <FormLabel>フルネーム</FormLabel>
                            <Input value={user?.name} readOnly />
                            <FormLabel>Mail</FormLabel>
                            <Input value={user?.email} readOnly />
                            <FormLabel>電話番号</FormLabel>
                            <Input value={user?.phone} readOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
});