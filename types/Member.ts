export type Member = {
  name: string;
  image: string;
  subteam: string;
  position: string;
}

const peter: Member = {
  name: "Peter Bidoshi",
  image: "peter.png",
  subteam: "iOS",
  position: "Course Instructor",
};

const aayush: Member = {
  name: "Aayush Agnihotri",
  image: "aayush.jpeg",
  subteam: "Backend",
  position: "Backend Lead",
};

const jennifer: Member = {
  name: "Jennifer Gu",
  image: "jennifer.jpg",
  subteam: "iOS",
  position: "Vice Team Lead",
};






















const members: Member[] = [
  {
    name: "Peter Bidoshi",
    image: "peter.png",
    subteam: "iOS",
    position: "Course Instructor",
  },
  {
    name: "Aayush Agnihotri",
    image: "aayush.jpeg",
    subteam: "Backend",
    position: "Backend Lead",
  },
  {
    name: "Jennifer Gu",
    image: "jennifer.jpg",
    subteam: "iOS",
    position: "Vice Team Lead",
  },
  {
    name: "Ant Torres",
    image: "ant.png",
    subteam: "iOS",
    position: "Product Lead",
  },
  {
    name: "Caitlyn Jin",
    image: "caitlyn.png",
    subteam: "iOS",
    position: "Member",
  },
  {
    name: "Candy Wu",
    image: "candy.jpeg",
    subteam: "Marketing",
    position: "Marketing Lead",
  },
  {
    name: "Charles Liggins",
    image: "charles.jpg",
    subteam: "iOS",
    position: "Member",
  },
  {
    name: "Justin Guo",
    image: "justin.jpg",
    subteam: "Android",
    position: "Android Lead",
  },
  {
    name: "Matt Wong",
    image: "matt.png",
    subteam: "Marketing",
    position: "Team Lead",
  },
  {
    name: "Nancy Duong",
    image: "nancy.png",
    subteam: "Design",
    position: "Design Lead",
  },
  {
    name: "Richie Sun",
    image: "richie.jpg",
    subteam: "iOS",
    position: "iOS Lead",
  },
  {
    name: "Funmi Olukanmi",
    image: "funmi.jpeg",
    subteam: "Design",
    position: "Course Instruction",
  }
];

export { members, peter, aayush, jennifer };