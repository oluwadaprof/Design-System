

import { TAttributeType } from 'src/types/entities'
import { Icons } from './base'

export const AppIcons = {
  default: Icons.hash,
  building: Icons.building,
  website: Icons.global,
  currency: Icons.dollarSquare,
  dollar: Icons.dollarSquare,
  text: Icons.textAa,
  number: Icons.hash,
  url: Icons.link,
  location: Icons.map,
  date: Icons.calendar,
  rating: Icons.star,
  tags: Icons.tag,
  industry: Icons.tag,
  select: Icons.option,
  meta: Icons.meta,
  instagram: Icons.instagram,
  twitter: Icons.x,
  linkedin: Icons.linkedin,
  description: Icons.firstLine,
  profile: Icons.profile,
  user: Icons.profile,
  users: Icons.profiles,
  flag: Icons.flag
} as Record<string, any>

export const EntityIcons = {
  building: Icons.building,
  user: Icons.profile,
  currency: Icons.dollarSquare,
  default: Icons.i3dcube
} as any

export const AttributeIcons = {
  text: Icons.textAa,
  number: Icons.hash,
  checkbox: Icons.tickSquare,
  currency: Icons.dollar,
  date: Icons.calendar,
  timestamp: Icons.clock,
  rating: Icons.star,
  status: Icons.kanban,
  select: Icons.option,
  record: Icons.at,
  user: Icons.user,
  location: Icons.map,
  domain: Icons.global,
  email: Icons.at,
  phone: Icons.phone,
  url: Icons.link,
  boolean: Icons.boolean,
  country: Icons.map,
  industry: Icons.tag,
  relationship: Icons.link,
  smart: Icons.sparkle
} as Record<TAttributeType, any>

export const PlansIcons = {
  basic: Icons.building,
  premium: Icons.i3dcube
} as Record<string, any>
