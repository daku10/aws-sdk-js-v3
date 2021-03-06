import {
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput
} from "../commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput
} from "../commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput
} from "../commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput
} from "../commands/DescribeProfilingGroupCommand";
import {
  GetProfileCommandInput,
  GetProfileCommandOutput
} from "../commands/GetProfileCommand";
import {
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput
} from "../commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput
} from "../commands/ListProfilingGroupsCommand";
import {
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput
} from "../commands/PostAgentProfileCommand";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput
} from "../commands/UpdateProfilingGroupCommand";
import {
  AgentConfiguration,
  AgentOrchestrationConfig,
  AggregatedProfileTime,
  ConflictException,
  InternalServerException,
  ProfileTime,
  ProfilingGroupDescription,
  ProfilingStatus,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1ConfigureAgentCommand = async (
  input: ConfigureAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}/configureAgent";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.fleetInstanceId !== undefined && {
      fleetInstanceId: input.fleetInstanceId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateProfilingGroupCommand = async (
  input: CreateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/profilingGroups";
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.agentOrchestrationConfig !== undefined && {
      agentOrchestrationConfig: serializeAws_restJson1_1AgentOrchestrationConfig(
        input.agentOrchestrationConfig,
        context
      )
    }),
    ...(input.profilingGroupName !== undefined && {
      profilingGroupName: input.profilingGroupName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteProfilingGroupCommand = async (
  input: DeleteProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeProfilingGroupCommand = async (
  input: DescribeProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListProfilingGroupsCommand = async (
  input: ListProfilingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/profilingGroups";
  const query: any = {
    ...(input.includeDescription !== undefined && {
      includeDescription: input.includeDescription.toString()
    }),
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateProfilingGroupCommand = async (
  input: UpdateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.agentOrchestrationConfig !== undefined && {
      agentOrchestrationConfig: serializeAws_restJson1_1AgentOrchestrationConfig(
        input.agentOrchestrationConfig,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.accept) && { Accept: input.accept! })
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}/profile";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {
    ...(input.endTime !== undefined && {
      endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.maxDepth !== undefined && {
      maxDepth: input.maxDepth.toString()
    }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && {
      startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListProfileTimesCommand = async (
  input: ListProfileTimesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}/profileTimes";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {
    ...(input.endTime !== undefined && {
      endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.orderBy !== undefined && { orderBy: input.orderBy }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && {
      startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1PostAgentProfileCommand = async (
  input: PostAgentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.contentType) && {
      "Content-Type": input.contentType!
    })
  };
  let resolvedPath = "/profilingGroups/{profilingGroupName}/agentProfile";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {
    ...(input.profileToken !== undefined && {
      profileToken: input.profileToken
    })
  };
  let body: any;
  if (input.agentProfile !== undefined) {
    body = input.agentProfile;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const deserializeAws_restJson1_1ConfigureAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ConfigureAgentCommandError(
      output,
      context
    );
  }
  const contents: ConfigureAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigureAgentResponse",
    configuration: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.configuration = deserializeAws_restJson1_1AgentConfiguration(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ConfigureAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: CreateProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.aws.skysail#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.aws.skysail#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: DeleteProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProfilingGroupResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListProfilingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProfilingGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListProfilingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProfilingGroupsResponse",
    nextToken: undefined,
    profilingGroupNames: undefined,
    profilingGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.profilingGroupNames !== undefined &&
    data.profilingGroupNames !== null
  ) {
    contents.profilingGroupNames = deserializeAws_restJson1_1ProfilingGroupNames(
      data.profilingGroupNames,
      context
    );
  }
  if (data.profilingGroups !== undefined && data.profilingGroups !== null) {
    contents.profilingGroups = deserializeAws_restJson1_1ProfilingGroupDescriptions(
      data.profilingGroups,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListProfilingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: UpdateProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.aws.skysail#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetProfileCommandError(output, context);
  }
  const contents: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProfileResponse",
    contentEncoding: undefined,
    contentType: undefined,
    profile: undefined
  };
  if (output.headers["content-encoding"] !== undefined) {
    contents.contentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.profile = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListProfileTimesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProfileTimesCommandError(
      output,
      context
    );
  }
  const contents: ListProfileTimesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProfileTimesResponse",
    nextToken: undefined,
    profileTimes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.profileTimes !== undefined && data.profileTimes !== null) {
    contents.profileTimes = deserializeAws_restJson1_1ProfileTimes(
      data.profileTimes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListProfileTimesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PostAgentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PostAgentProfileCommandError(
      output,
      context
    );
  }
  const contents: PostAgentProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostAgentProfileResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PostAgentProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AgentOrchestrationConfig = (
  input: AgentOrchestrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.profilingEnabled !== undefined && {
      profilingEnabled: input.profilingEnabled
    })
  };
};

const deserializeAws_restJson1_1AggregatedProfileTime = (
  output: any,
  context: __SerdeContext
): AggregatedProfileTime => {
  return {
    __type: "AggregatedProfileTime",
    period:
      output.period !== undefined && output.period !== null
        ? output.period
        : undefined,
    start:
      output.start !== undefined && output.start !== null
        ? new Date(output.start)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AgentConfiguration = (
  output: any,
  context: __SerdeContext
): AgentConfiguration => {
  return {
    __type: "AgentConfiguration",
    periodInSeconds:
      output.periodInSeconds !== undefined && output.periodInSeconds !== null
        ? output.periodInSeconds
        : undefined,
    shouldProfile:
      output.shouldProfile !== undefined && output.shouldProfile !== null
        ? output.shouldProfile
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AgentOrchestrationConfig = (
  output: any,
  context: __SerdeContext
): AgentOrchestrationConfig => {
  return {
    __type: "AgentOrchestrationConfig",
    profilingEnabled:
      output.profilingEnabled !== undefined && output.profilingEnabled !== null
        ? output.profilingEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProfilingGroupDescription = (
  output: any,
  context: __SerdeContext
): ProfilingGroupDescription => {
  return {
    __type: "ProfilingGroupDescription",
    agentOrchestrationConfig:
      output.agentOrchestrationConfig !== undefined &&
      output.agentOrchestrationConfig !== null
        ? deserializeAws_restJson1_1AgentOrchestrationConfig(
            output.agentOrchestrationConfig,
            context
          )
        : undefined,
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(output.createdAt)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    profilingStatus:
      output.profilingStatus !== undefined && output.profilingStatus !== null
        ? deserializeAws_restJson1_1ProfilingStatus(
            output.profilingStatus,
            context
          )
        : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(output.updatedAt)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProfilingGroupDescriptions = (
  output: any,
  context: __SerdeContext
): ProfilingGroupDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProfilingGroupDescription(entry, context)
  );
};

const deserializeAws_restJson1_1ProfilingGroupNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ProfilingStatus = (
  output: any,
  context: __SerdeContext
): ProfilingStatus => {
  return {
    __type: "ProfilingStatus",
    latestAgentOrchestratedAt:
      output.latestAgentOrchestratedAt !== undefined &&
      output.latestAgentOrchestratedAt !== null
        ? new Date(output.latestAgentOrchestratedAt)
        : undefined,
    latestAgentProfileReportedAt:
      output.latestAgentProfileReportedAt !== undefined &&
      output.latestAgentProfileReportedAt !== null
        ? new Date(output.latestAgentProfileReportedAt)
        : undefined,
    latestAggregatedProfile:
      output.latestAggregatedProfile !== undefined &&
      output.latestAggregatedProfile !== null
        ? deserializeAws_restJson1_1AggregatedProfileTime(
            output.latestAggregatedProfile,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProfileTime = (
  output: any,
  context: __SerdeContext
): ProfileTime => {
  return {
    __type: "ProfileTime",
    start:
      output.start !== undefined && output.start !== null
        ? new Date(output.start)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProfileTimes = (
  output: any,
  context: __SerdeContext
): ProfileTime[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProfileTime(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
