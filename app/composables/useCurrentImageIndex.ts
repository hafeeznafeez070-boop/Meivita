import { ref } from 'vue';

const currentImageIndex = ref(0);
export const useCurrentImageIndex = () => {
  return currentImageIndex;
};
