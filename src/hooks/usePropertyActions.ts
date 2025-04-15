import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveProperty, unsaveProperty } from '@/services/propertyService';
import { toast } from 'sonner';

export const usePropertyActions = () => {
  const queryClient = useQueryClient();

  const savePropertyMutation = useMutation({
    mutationFn: saveProperty,
    onSuccess: (_, propertyId) => {
      // Invalidate the properties query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      // Invalidate the specific property query if it exists
      queryClient.invalidateQueries({ queryKey: ['property', propertyId] });
      toast.success('Property saved successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const unsavePropertyMutation = useMutation({
    mutationFn: unsaveProperty,
    onSuccess: (_, propertyId) => {
      // Invalidate the properties query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      // Invalidate the specific property query if it exists
      queryClient.invalidateQueries({ queryKey: ['property', propertyId] });
      toast.success('Property removed from saved list');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    saveProperty: savePropertyMutation.mutate,
    unsaveProperty: unsavePropertyMutation.mutate,
    isSaving: savePropertyMutation.isPending,
    isUnsaving: unsavePropertyMutation.isPending,
  };
}; 