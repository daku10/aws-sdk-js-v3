import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A collection with the specified ID already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {}