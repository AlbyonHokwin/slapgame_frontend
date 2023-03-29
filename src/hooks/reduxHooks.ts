import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/utils/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;