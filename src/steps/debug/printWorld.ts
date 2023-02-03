import type { TWorld } from '@GTU/Types'
import { Given } from '@GTU/Parkin'

/**
 * Prints the world object to the logged output
 * Should be used for debugging only
 */
export const printWorld = async (world:TWorld) => {
  console.log(JSON.stringify(world, null, 2))
}

Given('I print the world object', printWorld, {
  module : `printWorld`,
  description: `Prints the world object to the logged output. Should be used for debugging only.`,
  expressions: [],
})


