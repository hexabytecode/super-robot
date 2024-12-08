import { useSnackbar } from "notistack";

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  return { notify };
};
