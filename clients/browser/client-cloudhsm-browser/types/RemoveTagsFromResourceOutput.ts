import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveTagsFromResourceOutput shape
 */
export interface RemoveTagsFromResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the operation.</p>
   */
  Status: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}