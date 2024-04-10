import { usePermissionStore } from "core/store/usePermissionStore";
import { useShallow } from "zustand/react/shallow";

export default function usePermission() {
    
    const { type, handlePermission } = usePermissionStore(
        useShallow(state => ({
          type: state.type,
          handlePermission: state.handlePermission,
        })),
      );

    return {
      type
    } 
}
