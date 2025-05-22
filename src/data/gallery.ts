export type GalleryImage = {
  id: number;
  image: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    alt: "Student practicing parallel parking",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    alt: "Instructor teaching road safety",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    alt: "DriveSafe Academy training car",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    alt: "Graduation day for new drivers",
  },
];
