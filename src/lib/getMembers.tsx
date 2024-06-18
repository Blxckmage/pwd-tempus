import { faker } from "@faker-js/faker";

export interface MemberProps {
  id: string;
  name: string;
  position: string;
  social: string;
  avatar: string;
}

export const getMembers = (count: number): MemberProps[] => {
  return Array.from({ length: count }, () => {
    const name = faker.person.firstName();
    const position = faker.person.jobType();
    const social = `@${faker.internet
      .userName({
        firstName: name,
      })
      .toLowerCase()}`;
    const avatar = faker.image.avatarGitHub();

    return {
      id: faker.string.uuid(),
      name,
      position,
      social,
      avatar,
    };
  });
};
