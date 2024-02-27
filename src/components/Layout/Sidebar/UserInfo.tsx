import { Avatar, Flex, Text } from "@chakra-ui/react";

type TUserInfoProps = {
  name: string;
  image: string;
};

export const UserInfo = ({ name, image }: TUserInfoProps) => {
  return (
    <Flex gap="4" alignItems="center">
      <Avatar size="sm" name={name} src={image} />
      <Text fontSize="md" as="b">
        {name}
      </Text>
    </Flex>
  );
};
