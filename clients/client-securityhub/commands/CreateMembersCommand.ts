import {
  SecurityHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SecurityHubClient";
import { CreateMembersRequest, CreateMembersResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateMembersCommand,
  serializeAws_restJson1_1CreateMembersCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type CreateMembersCommandInput = CreateMembersRequest;
export type CreateMembersCommandOutput = CreateMembersResponse &
  __MetadataBearer;

export class CreateMembersCommand extends $Command<
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMembersCommandInput, CreateMembersCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateMembersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateMembersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMembersCommandOutput> {
    return deserializeAws_restJson1_1CreateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
