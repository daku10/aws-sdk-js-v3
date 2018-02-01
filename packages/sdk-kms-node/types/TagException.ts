import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The request was rejected because one or more tags are not valid.</p>
 */
export interface TagException extends __ServiceException__<_TagExceptionDetails> {
    name: 'TagException';
}

export interface _TagExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}