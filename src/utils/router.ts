import { NextRouter } from 'next/router'

export const cleanUrl = (router: NextRouter) => router.replace(router.pathname, undefined, { shallow: true });