import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateRoleToGroupRequest {
  __type?: "AssociateRoleToGroupRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
   */
  RoleArn: string | undefined;
}

export namespace AssociateRoleToGroupRequest {
  export const isa = (o: any): o is AssociateRoleToGroupRequest =>
    __isa(o, "AssociateRoleToGroupRequest");
}

export interface AssociateRoleToGroupResponse {
  __type?: "AssociateRoleToGroupResponse";
  /**
   * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
   */
  AssociatedAt?: string;
}

export namespace AssociateRoleToGroupResponse {
  export const isa = (o: any): o is AssociateRoleToGroupResponse =>
    __isa(o, "AssociateRoleToGroupResponse");
}

export interface AssociateServiceRoleToAccountRequest {
  __type?: "AssociateServiceRoleToAccountRequest";
  /**
   * The ARN of the service role you wish to associate with your account.
   */
  RoleArn: string | undefined;
}

export namespace AssociateServiceRoleToAccountRequest {
  export const isa = (o: any): o is AssociateServiceRoleToAccountRequest =>
    __isa(o, "AssociateServiceRoleToAccountRequest");
}

export interface AssociateServiceRoleToAccountResponse {
  __type?: "AssociateServiceRoleToAccountResponse";
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;
}

export namespace AssociateServiceRoleToAccountResponse {
  export const isa = (o: any): o is AssociateServiceRoleToAccountResponse =>
    __isa(o, "AssociateServiceRoleToAccountResponse");
}

/**
 * General error information.
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
}

export namespace BadRequestException {
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
  __type?: "BulkDeployment";
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;
}

export namespace BulkDeployment {
  export const isa = (o: any): o is BulkDeployment =>
    __isa(o, "BulkDeployment");
}

/**
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
  __type?: "BulkDeploymentMetrics";
  /**
   * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
   */
  InvalidInputRecords?: number;

  /**
   * The total number of group records from the input file that have been processed so far, or attempted.
   */
  RecordsProcessed?: number;

  /**
   * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
   */
  RetryAttempts?: number;
}

export namespace BulkDeploymentMetrics {
  export const isa = (o: any): o is BulkDeploymentMetrics =>
    __isa(o, "BulkDeploymentMetrics");
}

/**
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
  __type?: "BulkDeploymentResult";
  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the group deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the group deployment.
   */
  DeploymentId?: string;

  /**
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * The error message for a failed deployment
   */
  ErrorMessage?: string;

  /**
   * The ARN of the Greengrass group.
   */
  GroupArn?: string;
}

export namespace BulkDeploymentResult {
  export const isa = (o: any): o is BulkDeploymentResult =>
    __isa(o, "BulkDeploymentResult");
}

export enum BulkDeploymentStatus {
  Completed = "Completed",
  Failed = "Failed",
  Initializing = "Initializing",
  Running = "Running",
  Stopped = "Stopped",
  Stopping = "Stopping"
}

/**
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
  __type?: "ConnectivityInfo";
  /**
   * The endpoint for the Greengrass core. Can be an IP address or DNS.
   */
  HostAddress?: string;

  /**
   * The ID of the connectivity information.
   */
  Id?: string;

  /**
   * Metadata for this endpoint.
   */
  Metadata?: string;

  /**
   * The port of the Greengrass core. Usually 8883.
   */
  PortNumber?: number;
}

export namespace ConnectivityInfo {
  export const isa = (o: any): o is ConnectivityInfo =>
    __isa(o, "ConnectivityInfo");
}

/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
  __type?: "Connector";
  /**
   * The ARN of the connector.
   */
  ConnectorArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   */
  Id: string | undefined;

  /**
   * The parameters or configuration that the connector uses.
   */
  Parameters?: { [key: string]: string };
}

export namespace Connector {
  export const isa = (o: any): o is Connector => __isa(o, "Connector");
}

/**
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
  __type?: "ConnectorDefinitionVersion";
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

export namespace ConnectorDefinitionVersion {
  export const isa = (o: any): o is ConnectorDefinitionVersion =>
    __isa(o, "ConnectorDefinitionVersion");
}

/**
 * Information about a core.
 */
export interface Core {
  __type?: "Core";
  /**
   * The ARN of the certificate associated with the core.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the core's local shadow is automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The ARN of the thing which is the core.
   */
  ThingArn: string | undefined;
}

export namespace Core {
  export const isa = (o: any): o is Core => __isa(o, "Core");
}

/**
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
  __type?: "CoreDefinitionVersion";
  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

export namespace CoreDefinitionVersion {
  export const isa = (o: any): o is CoreDefinitionVersion =>
    __isa(o, "CoreDefinitionVersion");
}

export interface CreateConnectorDefinitionRequest {
  __type?: "CreateConnectorDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the connector definition.
   */
  InitialVersion?: ConnectorDefinitionVersion;

  /**
   * The name of the connector definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateConnectorDefinitionRequest {
  export const isa = (o: any): o is CreateConnectorDefinitionRequest =>
    __isa(o, "CreateConnectorDefinitionRequest");
}

export interface CreateConnectorDefinitionResponse {
  __type?: "CreateConnectorDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateConnectorDefinitionResponse {
  export const isa = (o: any): o is CreateConnectorDefinitionResponse =>
    __isa(o, "CreateConnectorDefinitionResponse");
}

export interface CreateConnectorDefinitionVersionRequest {
  __type?: "CreateConnectorDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

export namespace CreateConnectorDefinitionVersionRequest {
  export const isa = (o: any): o is CreateConnectorDefinitionVersionRequest =>
    __isa(o, "CreateConnectorDefinitionVersionRequest");
}

export interface CreateConnectorDefinitionVersionResponse {
  __type?: "CreateConnectorDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateConnectorDefinitionVersionResponse {
  export const isa = (o: any): o is CreateConnectorDefinitionVersionResponse =>
    __isa(o, "CreateConnectorDefinitionVersionResponse");
}

/**
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
  __type?: "CreateCoreDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the core definition.
   */
  InitialVersion?: CoreDefinitionVersion;

  /**
   * The name of the core definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateCoreDefinitionRequest {
  export const isa = (o: any): o is CreateCoreDefinitionRequest =>
    __isa(o, "CreateCoreDefinitionRequest");
}

export interface CreateCoreDefinitionResponse {
  __type?: "CreateCoreDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateCoreDefinitionResponse {
  export const isa = (o: any): o is CreateCoreDefinitionResponse =>
    __isa(o, "CreateCoreDefinitionResponse");
}

export interface CreateCoreDefinitionVersionRequest {
  __type?: "CreateCoreDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

export namespace CreateCoreDefinitionVersionRequest {
  export const isa = (o: any): o is CreateCoreDefinitionVersionRequest =>
    __isa(o, "CreateCoreDefinitionVersionRequest");
}

export interface CreateCoreDefinitionVersionResponse {
  __type?: "CreateCoreDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateCoreDefinitionVersionResponse {
  export const isa = (o: any): o is CreateCoreDefinitionVersionResponse =>
    __isa(o, "CreateCoreDefinitionVersionResponse");
}

export interface CreateDeploymentRequest {
  __type?: "CreateDeploymentRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the deployment if you wish to redeploy a previous deployment.
   */
  DeploymentId?: string;

  /**
   * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
   */
  DeploymentType: DeploymentType | string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version to be deployed.
   */
  GroupVersionId?: string;
}

export namespace CreateDeploymentRequest {
  export const isa = (o: any): o is CreateDeploymentRequest =>
    __isa(o, "CreateDeploymentRequest");
}

export interface CreateDeploymentResponse {
  __type?: "CreateDeploymentResponse";
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

export namespace CreateDeploymentResponse {
  export const isa = (o: any): o is CreateDeploymentResponse =>
    __isa(o, "CreateDeploymentResponse");
}

export interface CreateDeviceDefinitionRequest {
  __type?: "CreateDeviceDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the device definition.
   */
  InitialVersion?: DeviceDefinitionVersion;

  /**
   * The name of the device definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateDeviceDefinitionRequest {
  export const isa = (o: any): o is CreateDeviceDefinitionRequest =>
    __isa(o, "CreateDeviceDefinitionRequest");
}

export interface CreateDeviceDefinitionResponse {
  __type?: "CreateDeviceDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateDeviceDefinitionResponse {
  export const isa = (o: any): o is CreateDeviceDefinitionResponse =>
    __isa(o, "CreateDeviceDefinitionResponse");
}

export interface CreateDeviceDefinitionVersionRequest {
  __type?: "CreateDeviceDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

export namespace CreateDeviceDefinitionVersionRequest {
  export const isa = (o: any): o is CreateDeviceDefinitionVersionRequest =>
    __isa(o, "CreateDeviceDefinitionVersionRequest");
}

export interface CreateDeviceDefinitionVersionResponse {
  __type?: "CreateDeviceDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateDeviceDefinitionVersionResponse {
  export const isa = (o: any): o is CreateDeviceDefinitionVersionResponse =>
    __isa(o, "CreateDeviceDefinitionVersionResponse");
}

export interface CreateFunctionDefinitionRequest {
  __type?: "CreateFunctionDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the function definition.
   */
  InitialVersion?: FunctionDefinitionVersion;

  /**
   * The name of the function definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateFunctionDefinitionRequest {
  export const isa = (o: any): o is CreateFunctionDefinitionRequest =>
    __isa(o, "CreateFunctionDefinitionRequest");
}

export interface CreateFunctionDefinitionResponse {
  __type?: "CreateFunctionDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateFunctionDefinitionResponse {
  export const isa = (o: any): o is CreateFunctionDefinitionResponse =>
    __isa(o, "CreateFunctionDefinitionResponse");
}

/**
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
  __type?: "CreateFunctionDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

export namespace CreateFunctionDefinitionVersionRequest {
  export const isa = (o: any): o is CreateFunctionDefinitionVersionRequest =>
    __isa(o, "CreateFunctionDefinitionVersionRequest");
}

export interface CreateFunctionDefinitionVersionResponse {
  __type?: "CreateFunctionDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateFunctionDefinitionVersionResponse {
  export const isa = (o: any): o is CreateFunctionDefinitionVersionResponse =>
    __isa(o, "CreateFunctionDefinitionVersionResponse");
}

export interface CreateGroupCertificateAuthorityRequest {
  __type?: "CreateGroupCertificateAuthorityRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace CreateGroupCertificateAuthorityRequest {
  export const isa = (o: any): o is CreateGroupCertificateAuthorityRequest =>
    __isa(o, "CreateGroupCertificateAuthorityRequest");
}

export interface CreateGroupCertificateAuthorityResponse {
  __type?: "CreateGroupCertificateAuthorityResponse";
  /**
   * The ARN of the group certificate authority.
   */
  GroupCertificateAuthorityArn?: string;
}

export namespace CreateGroupCertificateAuthorityResponse {
  export const isa = (o: any): o is CreateGroupCertificateAuthorityResponse =>
    __isa(o, "CreateGroupCertificateAuthorityResponse");
}

export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the group.
   */
  InitialVersion?: GroupVersion;

  /**
   * The name of the group.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateGroupRequest {
  export const isa = (o: any): o is CreateGroupRequest =>
    __isa(o, "CreateGroupRequest");
}

export interface CreateGroupResponse {
  __type?: "CreateGroupResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateGroupResponse {
  export const isa = (o: any): o is CreateGroupResponse =>
    __isa(o, "CreateGroupResponse");
}

export interface CreateGroupVersionRequest {
  __type?: "CreateGroupVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

export namespace CreateGroupVersionRequest {
  export const isa = (o: any): o is CreateGroupVersionRequest =>
    __isa(o, "CreateGroupVersionRequest");
}

export interface CreateGroupVersionResponse {
  __type?: "CreateGroupVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateGroupVersionResponse {
  export const isa = (o: any): o is CreateGroupVersionResponse =>
    __isa(o, "CreateGroupVersionResponse");
}

export interface CreateLoggerDefinitionRequest {
  __type?: "CreateLoggerDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the logger definition.
   */
  InitialVersion?: LoggerDefinitionVersion;

  /**
   * The name of the logger definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateLoggerDefinitionRequest {
  export const isa = (o: any): o is CreateLoggerDefinitionRequest =>
    __isa(o, "CreateLoggerDefinitionRequest");
}

export interface CreateLoggerDefinitionResponse {
  __type?: "CreateLoggerDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateLoggerDefinitionResponse {
  export const isa = (o: any): o is CreateLoggerDefinitionResponse =>
    __isa(o, "CreateLoggerDefinitionResponse");
}

export interface CreateLoggerDefinitionVersionRequest {
  __type?: "CreateLoggerDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

export namespace CreateLoggerDefinitionVersionRequest {
  export const isa = (o: any): o is CreateLoggerDefinitionVersionRequest =>
    __isa(o, "CreateLoggerDefinitionVersionRequest");
}

export interface CreateLoggerDefinitionVersionResponse {
  __type?: "CreateLoggerDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateLoggerDefinitionVersionResponse {
  export const isa = (o: any): o is CreateLoggerDefinitionVersionResponse =>
    __isa(o, "CreateLoggerDefinitionVersionResponse");
}

export interface CreateResourceDefinitionRequest {
  __type?: "CreateResourceDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the resource definition.
   */
  InitialVersion?: ResourceDefinitionVersion;

  /**
   * The name of the resource definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateResourceDefinitionRequest {
  export const isa = (o: any): o is CreateResourceDefinitionRequest =>
    __isa(o, "CreateResourceDefinitionRequest");
}

export interface CreateResourceDefinitionResponse {
  __type?: "CreateResourceDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateResourceDefinitionResponse {
  export const isa = (o: any): o is CreateResourceDefinitionResponse =>
    __isa(o, "CreateResourceDefinitionResponse");
}

export interface CreateResourceDefinitionVersionRequest {
  __type?: "CreateResourceDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

export namespace CreateResourceDefinitionVersionRequest {
  export const isa = (o: any): o is CreateResourceDefinitionVersionRequest =>
    __isa(o, "CreateResourceDefinitionVersionRequest");
}

export interface CreateResourceDefinitionVersionResponse {
  __type?: "CreateResourceDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateResourceDefinitionVersionResponse {
  export const isa = (o: any): o is CreateResourceDefinitionVersionResponse =>
    __isa(o, "CreateResourceDefinitionVersionResponse");
}

export interface CreateSoftwareUpdateJobRequest {
  __type?: "CreateSoftwareUpdateJobRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   */
  S3UrlSignerRole: string | undefined;

  /**
   * The piece of software on the Greengrass core that will be updated.
   */
  SoftwareToUpdate: SoftwareToUpdate | string | undefined;

  /**
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   */
  UpdateAgentLogLevel?: UpdateAgentLogLevel | string;

  /**
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   */
  UpdateTargets: string[] | undefined;

  /**
   * The architecture of the cores which are the targets of an update.
   */
  UpdateTargetsArchitecture: UpdateTargetsArchitecture | string | undefined;

  /**
   * The operating system of the cores which are the targets of an update.
   */
  UpdateTargetsOperatingSystem:
    | UpdateTargetsOperatingSystem
    | string
    | undefined;
}

export namespace CreateSoftwareUpdateJobRequest {
  export const isa = (o: any): o is CreateSoftwareUpdateJobRequest =>
    __isa(o, "CreateSoftwareUpdateJobRequest");
}

export interface CreateSoftwareUpdateJobResponse {
  __type?: "CreateSoftwareUpdateJobResponse";
  /**
   * The IoT Job ARN corresponding to this update.
   */
  IotJobArn?: string;

  /**
   * The IoT Job Id corresponding to this update.
   */
  IotJobId?: string;

  /**
   * The software version installed on the device or devices after the update.
   */
  PlatformSoftwareVersion?: string;
}

export namespace CreateSoftwareUpdateJobResponse {
  export const isa = (o: any): o is CreateSoftwareUpdateJobResponse =>
    __isa(o, "CreateSoftwareUpdateJobResponse");
}

export interface CreateSubscriptionDefinitionRequest {
  __type?: "CreateSubscriptionDefinitionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the subscription definition.
   */
  InitialVersion?: SubscriptionDefinitionVersion;

  /**
   * The name of the subscription definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace CreateSubscriptionDefinitionRequest {
  export const isa = (o: any): o is CreateSubscriptionDefinitionRequest =>
    __isa(o, "CreateSubscriptionDefinitionRequest");
}

export interface CreateSubscriptionDefinitionResponse {
  __type?: "CreateSubscriptionDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace CreateSubscriptionDefinitionResponse {
  export const isa = (o: any): o is CreateSubscriptionDefinitionResponse =>
    __isa(o, "CreateSubscriptionDefinitionResponse");
}

export interface CreateSubscriptionDefinitionVersionRequest {
  __type?: "CreateSubscriptionDefinitionVersionRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

export namespace CreateSubscriptionDefinitionVersionRequest {
  export const isa = (
    o: any
  ): o is CreateSubscriptionDefinitionVersionRequest =>
    __isa(o, "CreateSubscriptionDefinitionVersionRequest");
}

export interface CreateSubscriptionDefinitionVersionResponse {
  __type?: "CreateSubscriptionDefinitionVersionResponse";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace CreateSubscriptionDefinitionVersionResponse {
  export const isa = (
    o: any
  ): o is CreateSubscriptionDefinitionVersionResponse =>
    __isa(o, "CreateSubscriptionDefinitionVersionResponse");
}

/**
 * Information about a definition.
 */
export interface DefinitionInformation {
  __type?: "DefinitionInformation";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  Tags?: { [key: string]: string };
}

export namespace DefinitionInformation {
  export const isa = (o: any): o is DefinitionInformation =>
    __isa(o, "DefinitionInformation");
}

export interface DeleteConnectorDefinitionRequest {
  __type?: "DeleteConnectorDefinitionRequest";
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

export namespace DeleteConnectorDefinitionRequest {
  export const isa = (o: any): o is DeleteConnectorDefinitionRequest =>
    __isa(o, "DeleteConnectorDefinitionRequest");
}

export interface DeleteConnectorDefinitionResponse {
  __type?: "DeleteConnectorDefinitionResponse";
}

export namespace DeleteConnectorDefinitionResponse {
  export const isa = (o: any): o is DeleteConnectorDefinitionResponse =>
    __isa(o, "DeleteConnectorDefinitionResponse");
}

export interface DeleteCoreDefinitionRequest {
  __type?: "DeleteCoreDefinitionRequest";
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

export namespace DeleteCoreDefinitionRequest {
  export const isa = (o: any): o is DeleteCoreDefinitionRequest =>
    __isa(o, "DeleteCoreDefinitionRequest");
}

export interface DeleteCoreDefinitionResponse {
  __type?: "DeleteCoreDefinitionResponse";
}

export namespace DeleteCoreDefinitionResponse {
  export const isa = (o: any): o is DeleteCoreDefinitionResponse =>
    __isa(o, "DeleteCoreDefinitionResponse");
}

export interface DeleteDeviceDefinitionRequest {
  __type?: "DeleteDeviceDefinitionRequest";
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

export namespace DeleteDeviceDefinitionRequest {
  export const isa = (o: any): o is DeleteDeviceDefinitionRequest =>
    __isa(o, "DeleteDeviceDefinitionRequest");
}

export interface DeleteDeviceDefinitionResponse {
  __type?: "DeleteDeviceDefinitionResponse";
}

export namespace DeleteDeviceDefinitionResponse {
  export const isa = (o: any): o is DeleteDeviceDefinitionResponse =>
    __isa(o, "DeleteDeviceDefinitionResponse");
}

export interface DeleteFunctionDefinitionRequest {
  __type?: "DeleteFunctionDefinitionRequest";
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

export namespace DeleteFunctionDefinitionRequest {
  export const isa = (o: any): o is DeleteFunctionDefinitionRequest =>
    __isa(o, "DeleteFunctionDefinitionRequest");
}

export interface DeleteFunctionDefinitionResponse {
  __type?: "DeleteFunctionDefinitionResponse";
}

export namespace DeleteFunctionDefinitionResponse {
  export const isa = (o: any): o is DeleteFunctionDefinitionResponse =>
    __isa(o, "DeleteFunctionDefinitionResponse");
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace DeleteGroupRequest {
  export const isa = (o: any): o is DeleteGroupRequest =>
    __isa(o, "DeleteGroupRequest");
}

export interface DeleteGroupResponse {
  __type?: "DeleteGroupResponse";
}

export namespace DeleteGroupResponse {
  export const isa = (o: any): o is DeleteGroupResponse =>
    __isa(o, "DeleteGroupResponse");
}

export interface DeleteLoggerDefinitionRequest {
  __type?: "DeleteLoggerDefinitionRequest";
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

export namespace DeleteLoggerDefinitionRequest {
  export const isa = (o: any): o is DeleteLoggerDefinitionRequest =>
    __isa(o, "DeleteLoggerDefinitionRequest");
}

export interface DeleteLoggerDefinitionResponse {
  __type?: "DeleteLoggerDefinitionResponse";
}

export namespace DeleteLoggerDefinitionResponse {
  export const isa = (o: any): o is DeleteLoggerDefinitionResponse =>
    __isa(o, "DeleteLoggerDefinitionResponse");
}

export interface DeleteResourceDefinitionRequest {
  __type?: "DeleteResourceDefinitionRequest";
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace DeleteResourceDefinitionRequest {
  export const isa = (o: any): o is DeleteResourceDefinitionRequest =>
    __isa(o, "DeleteResourceDefinitionRequest");
}

export interface DeleteResourceDefinitionResponse {
  __type?: "DeleteResourceDefinitionResponse";
}

export namespace DeleteResourceDefinitionResponse {
  export const isa = (o: any): o is DeleteResourceDefinitionResponse =>
    __isa(o, "DeleteResourceDefinitionResponse");
}

export interface DeleteSubscriptionDefinitionRequest {
  __type?: "DeleteSubscriptionDefinitionRequest";
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace DeleteSubscriptionDefinitionRequest {
  export const isa = (o: any): o is DeleteSubscriptionDefinitionRequest =>
    __isa(o, "DeleteSubscriptionDefinitionRequest");
}

export interface DeleteSubscriptionDefinitionResponse {
  __type?: "DeleteSubscriptionDefinitionResponse";
}

export namespace DeleteSubscriptionDefinitionResponse {
  export const isa = (o: any): o is DeleteSubscriptionDefinitionResponse =>
    __isa(o, "DeleteSubscriptionDefinitionResponse");
}

/**
 * Information about a deployment.
 */
export interface Deployment {
  __type?: "Deployment";
  /**
   * The time, in milliseconds since the epoch, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * The ARN of the group for this deployment.
   */
  GroupArn?: string;
}

export namespace Deployment {
  export const isa = (o: any): o is Deployment => __isa(o, "Deployment");
}

export enum DeploymentType {
  ForceResetDeployment = "ForceResetDeployment",
  NewDeployment = "NewDeployment",
  Redeployment = "Redeployment",
  ResetDeployment = "ResetDeployment"
}

/**
 * Information about a device.
 */
export interface Device {
  __type?: "Device";
  /**
   * The ARN of the certificate associated with the device.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the device's local shadow will be automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The thing ARN of the device.
   */
  ThingArn: string | undefined;
}

export namespace Device {
  export const isa = (o: any): o is Device => __isa(o, "Device");
}

/**
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
  __type?: "DeviceDefinitionVersion";
  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

export namespace DeviceDefinitionVersion {
  export const isa = (o: any): o is DeviceDefinitionVersion =>
    __isa(o, "DeviceDefinitionVersion");
}

export interface DisassociateRoleFromGroupRequest {
  __type?: "DisassociateRoleFromGroupRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace DisassociateRoleFromGroupRequest {
  export const isa = (o: any): o is DisassociateRoleFromGroupRequest =>
    __isa(o, "DisassociateRoleFromGroupRequest");
}

export interface DisassociateRoleFromGroupResponse {
  __type?: "DisassociateRoleFromGroupResponse";
  /**
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   */
  DisassociatedAt?: string;
}

export namespace DisassociateRoleFromGroupResponse {
  export const isa = (o: any): o is DisassociateRoleFromGroupResponse =>
    __isa(o, "DisassociateRoleFromGroupResponse");
}

export interface DisassociateServiceRoleFromAccountRequest {
  __type?: "DisassociateServiceRoleFromAccountRequest";
}

export namespace DisassociateServiceRoleFromAccountRequest {
  export const isa = (o: any): o is DisassociateServiceRoleFromAccountRequest =>
    __isa(o, "DisassociateServiceRoleFromAccountRequest");
}

export interface DisassociateServiceRoleFromAccountResponse {
  __type?: "DisassociateServiceRoleFromAccountResponse";
  /**
   * The time when the service role was disassociated from the account.
   */
  DisassociatedAt?: string;
}

export namespace DisassociateServiceRoleFromAccountResponse {
  export const isa = (
    o: any
  ): o is DisassociateServiceRoleFromAccountResponse =>
    __isa(o, "DisassociateServiceRoleFromAccountResponse");
}

export enum EncodingType {
  binary = "binary",
  json = "json"
}

/**
 * Details about the error.
 */
export interface ErrorDetail {
  __type?: "ErrorDetail";
  /**
   * A detailed error code.
   */
  DetailedErrorCode?: string;

  /**
   * A detailed error message.
   */
  DetailedErrorMessage?: string;
}

export namespace ErrorDetail {
  export const isa = (o: any): o is ErrorDetail => __isa(o, "ErrorDetail");
}

/**
 * Information about a Lambda function.
 */
export interface Function {
  __type?: "Function";
  /**
   * The ARN of the Lambda function.
   */
  FunctionArn?: string;

  /**
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: FunctionConfiguration;

  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;
}

export namespace Function {
  export const isa = (o: any): o is Function => __isa(o, "Function");
}

/**
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
  __type?: "FunctionConfiguration";
  /**
   * The expected encoding type of the input payload for the function. The default is ''json''.
   */
  EncodingType?: EncodingType | string;

  /**
   * The environment configuration of the function.
   */
  Environment?: FunctionConfigurationEnvironment;

  /**
   * The execution arguments.
   */
  ExecArgs?: string;

  /**
   * The name of the function executable.
   */
  Executable?: string;

  /**
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   */
  MemorySize?: number;

  /**
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   */
  Pinned?: boolean;

  /**
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   */
  Timeout?: number;
}

export namespace FunctionConfiguration {
  export const isa = (o: any): o is FunctionConfiguration =>
    __isa(o, "FunctionConfiguration");
}

/**
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
  __type?: "FunctionConfigurationEnvironment";
  /**
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   */
  AccessSysfs?: boolean;

  /**
   * Configuration related to executing the Lambda function
   */
  Execution?: FunctionExecutionConfig;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?: ResourceAccessPolicy[];

  /**
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: { [key: string]: string };
}

export namespace FunctionConfigurationEnvironment {
  export const isa = (o: any): o is FunctionConfigurationEnvironment =>
    __isa(o, "FunctionConfigurationEnvironment");
}

/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
  __type?: "FunctionDefaultConfig";
  /**
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: FunctionDefaultExecutionConfig;
}

export namespace FunctionDefaultConfig {
  export const isa = (o: any): o is FunctionDefaultConfig =>
    __isa(o, "FunctionDefaultConfig");
}

/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
  __type?: "FunctionDefaultExecutionConfig";
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

export namespace FunctionDefaultExecutionConfig {
  export const isa = (o: any): o is FunctionDefaultExecutionConfig =>
    __isa(o, "FunctionDefaultExecutionConfig");
}

/**
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
  __type?: "FunctionDefinitionVersion";
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

export namespace FunctionDefinitionVersion {
  export const isa = (o: any): o is FunctionDefinitionVersion =>
    __isa(o, "FunctionDefinitionVersion");
}

/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
  __type?: "FunctionExecutionConfig";
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

export namespace FunctionExecutionConfig {
  export const isa = (o: any): o is FunctionExecutionConfig =>
    __isa(o, "FunctionExecutionConfig");
}

export enum FunctionIsolationMode {
  GreengrassContainer = "GreengrassContainer",
  NoContainer = "NoContainer"
}

/**
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
  __type?: "FunctionRunAsConfig";
  /**
   * The group ID whose permissions are used to run a Lambda function.
   */
  Gid?: number;

  /**
   * The user ID whose permissions are used to run a Lambda function.
   */
  Uid?: number;
}

export namespace FunctionRunAsConfig {
  export const isa = (o: any): o is FunctionRunAsConfig =>
    __isa(o, "FunctionRunAsConfig");
}

export interface GetAssociatedRoleRequest {
  __type?: "GetAssociatedRoleRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetAssociatedRoleRequest {
  export const isa = (o: any): o is GetAssociatedRoleRequest =>
    __isa(o, "GetAssociatedRoleRequest");
}

export interface GetAssociatedRoleResponse {
  __type?: "GetAssociatedRoleResponse";
  /**
   * The time when the role was associated with the group.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role that is associated with the group.
   */
  RoleArn?: string;
}

export namespace GetAssociatedRoleResponse {
  export const isa = (o: any): o is GetAssociatedRoleResponse =>
    __isa(o, "GetAssociatedRoleResponse");
}

export interface GetBulkDeploymentStatusRequest {
  __type?: "GetBulkDeploymentStatusRequest";
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

export namespace GetBulkDeploymentStatusRequest {
  export const isa = (o: any): o is GetBulkDeploymentStatusRequest =>
    __isa(o, "GetBulkDeploymentStatusRequest");
}

export interface GetBulkDeploymentStatusResponse {
  __type?: "GetBulkDeploymentStatusResponse";
  /**
   * Relevant metrics on input records processed during bulk deployment.
   */
  BulkDeploymentMetrics?: BulkDeploymentMetrics;

  /**
   * The status of the bulk deployment.
   */
  BulkDeploymentStatus?: BulkDeploymentStatus | string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetBulkDeploymentStatusResponse {
  export const isa = (o: any): o is GetBulkDeploymentStatusResponse =>
    __isa(o, "GetBulkDeploymentStatusResponse");
}

export interface GetConnectivityInfoRequest {
  __type?: "GetConnectivityInfoRequest";
  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace GetConnectivityInfoRequest {
  export const isa = (o: any): o is GetConnectivityInfoRequest =>
    __isa(o, "GetConnectivityInfoRequest");
}

export interface GetConnectivityInfoResponse {
  __type?: "GetConnectivityInfoResponse";
  /**
   * Connectivity info list.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * A message about the connectivity info request.
   */
  Message?: string;
}

export namespace GetConnectivityInfoResponse {
  export const isa = (o: any): o is GetConnectivityInfoResponse =>
    __isa(o, "GetConnectivityInfoResponse");
}

export interface GetConnectorDefinitionRequest {
  __type?: "GetConnectorDefinitionRequest";
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

export namespace GetConnectorDefinitionRequest {
  export const isa = (o: any): o is GetConnectorDefinitionRequest =>
    __isa(o, "GetConnectorDefinitionRequest");
}

export interface GetConnectorDefinitionResponse {
  __type?: "GetConnectorDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetConnectorDefinitionResponse {
  export const isa = (o: any): o is GetConnectorDefinitionResponse =>
    __isa(o, "GetConnectorDefinitionResponse");
}

export interface GetConnectorDefinitionVersionRequest {
  __type?: "GetConnectorDefinitionVersionRequest";
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ConnectorDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetConnectorDefinitionVersionRequest {
  export const isa = (o: any): o is GetConnectorDefinitionVersionRequest =>
    __isa(o, "GetConnectorDefinitionVersionRequest");
}

export interface GetConnectorDefinitionVersionResponse {
  __type?: "GetConnectorDefinitionVersionResponse";
  /**
   * The ARN of the connector definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the connector definition version.
   */
  Definition?: ConnectorDefinitionVersion;

  /**
   * The ID of the connector definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the connector definition version.
   */
  Version?: string;
}

export namespace GetConnectorDefinitionVersionResponse {
  export const isa = (o: any): o is GetConnectorDefinitionVersionResponse =>
    __isa(o, "GetConnectorDefinitionVersionResponse");
}

export interface GetCoreDefinitionRequest {
  __type?: "GetCoreDefinitionRequest";
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

export namespace GetCoreDefinitionRequest {
  export const isa = (o: any): o is GetCoreDefinitionRequest =>
    __isa(o, "GetCoreDefinitionRequest");
}

export interface GetCoreDefinitionResponse {
  __type?: "GetCoreDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetCoreDefinitionResponse {
  export const isa = (o: any): o is GetCoreDefinitionResponse =>
    __isa(o, "GetCoreDefinitionResponse");
}

export interface GetCoreDefinitionVersionRequest {
  __type?: "GetCoreDefinitionVersionRequest";
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  CoreDefinitionVersionId: string | undefined;
}

export namespace GetCoreDefinitionVersionRequest {
  export const isa = (o: any): o is GetCoreDefinitionVersionRequest =>
    __isa(o, "GetCoreDefinitionVersionRequest");
}

export interface GetCoreDefinitionVersionResponse {
  __type?: "GetCoreDefinitionVersionResponse";
  /**
   * The ARN of the core definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the core definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the core definition version.
   */
  Definition?: CoreDefinitionVersion;

  /**
   * The ID of the core definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the core definition version.
   */
  Version?: string;
}

export namespace GetCoreDefinitionVersionResponse {
  export const isa = (o: any): o is GetCoreDefinitionVersionResponse =>
    __isa(o, "GetCoreDefinitionVersionResponse");
}

export interface GetDeploymentStatusRequest {
  __type?: "GetDeploymentStatusRequest";
  /**
   * The ID of the deployment.
   */
  DeploymentId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetDeploymentStatusRequest {
  export const isa = (o: any): o is GetDeploymentStatusRequest =>
    __isa(o, "GetDeploymentStatusRequest");
}

export interface GetDeploymentStatusResponse {
  __type?: "GetDeploymentStatusResponse";
  /**
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   */
  UpdatedAt?: string;
}

export namespace GetDeploymentStatusResponse {
  export const isa = (o: any): o is GetDeploymentStatusResponse =>
    __isa(o, "GetDeploymentStatusResponse");
}

export interface GetDeviceDefinitionRequest {
  __type?: "GetDeviceDefinitionRequest";
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

export namespace GetDeviceDefinitionRequest {
  export const isa = (o: any): o is GetDeviceDefinitionRequest =>
    __isa(o, "GetDeviceDefinitionRequest");
}

export interface GetDeviceDefinitionResponse {
  __type?: "GetDeviceDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetDeviceDefinitionResponse {
  export const isa = (o: any): o is GetDeviceDefinitionResponse =>
    __isa(o, "GetDeviceDefinitionResponse");
}

export interface GetDeviceDefinitionVersionRequest {
  __type?: "GetDeviceDefinitionVersionRequest";
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  DeviceDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetDeviceDefinitionVersionRequest {
  export const isa = (o: any): o is GetDeviceDefinitionVersionRequest =>
    __isa(o, "GetDeviceDefinitionVersionRequest");
}

export interface GetDeviceDefinitionVersionResponse {
  __type?: "GetDeviceDefinitionVersionResponse";
  /**
   * The ARN of the device definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the device definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the device definition version.
   */
  Definition?: DeviceDefinitionVersion;

  /**
   * The ID of the device definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the device definition version.
   */
  Version?: string;
}

export namespace GetDeviceDefinitionVersionResponse {
  export const isa = (o: any): o is GetDeviceDefinitionVersionResponse =>
    __isa(o, "GetDeviceDefinitionVersionResponse");
}

export interface GetFunctionDefinitionRequest {
  __type?: "GetFunctionDefinitionRequest";
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

export namespace GetFunctionDefinitionRequest {
  export const isa = (o: any): o is GetFunctionDefinitionRequest =>
    __isa(o, "GetFunctionDefinitionRequest");
}

export interface GetFunctionDefinitionResponse {
  __type?: "GetFunctionDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetFunctionDefinitionResponse {
  export const isa = (o: any): o is GetFunctionDefinitionResponse =>
    __isa(o, "GetFunctionDefinitionResponse");
}

export interface GetFunctionDefinitionVersionRequest {
  __type?: "GetFunctionDefinitionVersionRequest";
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  FunctionDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetFunctionDefinitionVersionRequest {
  export const isa = (o: any): o is GetFunctionDefinitionVersionRequest =>
    __isa(o, "GetFunctionDefinitionVersionRequest");
}

export interface GetFunctionDefinitionVersionResponse {
  __type?: "GetFunctionDefinitionVersionResponse";
  /**
   * The ARN of the function definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the function definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information on the definition.
   */
  Definition?: FunctionDefinitionVersion;

  /**
   * The ID of the function definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the function definition version.
   */
  Version?: string;
}

export namespace GetFunctionDefinitionVersionResponse {
  export const isa = (o: any): o is GetFunctionDefinitionVersionResponse =>
    __isa(o, "GetFunctionDefinitionVersionResponse");
}

export interface GetGroupCertificateAuthorityRequest {
  __type?: "GetGroupCertificateAuthorityRequest";
  /**
   * The ID of the certificate authority.
   */
  CertificateAuthorityId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupCertificateAuthorityRequest {
  export const isa = (o: any): o is GetGroupCertificateAuthorityRequest =>
    __isa(o, "GetGroupCertificateAuthorityRequest");
}

export interface GetGroupCertificateAuthorityResponse {
  __type?: "GetGroupCertificateAuthorityResponse";
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;

  /**
   * The PEM encoded certificate for the group.
   */
  PemEncodedCertificate?: string;
}

export namespace GetGroupCertificateAuthorityResponse {
  export const isa = (o: any): o is GetGroupCertificateAuthorityResponse =>
    __isa(o, "GetGroupCertificateAuthorityResponse");
}

export interface GetGroupCertificateConfigurationRequest {
  __type?: "GetGroupCertificateConfigurationRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupCertificateConfigurationRequest {
  export const isa = (o: any): o is GetGroupCertificateConfigurationRequest =>
    __isa(o, "GetGroupCertificateConfigurationRequest");
}

export interface GetGroupCertificateConfigurationResponse {
  __type?: "GetGroupCertificateConfigurationResponse";
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

export namespace GetGroupCertificateConfigurationResponse {
  export const isa = (o: any): o is GetGroupCertificateConfigurationResponse =>
    __isa(o, "GetGroupCertificateConfigurationResponse");
}

export interface GetGroupRequest {
  __type?: "GetGroupRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace GetGroupRequest {
  export const isa = (o: any): o is GetGroupRequest =>
    __isa(o, "GetGroupRequest");
}

export interface GetGroupResponse {
  __type?: "GetGroupResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetGroupResponse {
  export const isa = (o: any): o is GetGroupResponse =>
    __isa(o, "GetGroupResponse");
}

export interface GetGroupVersionRequest {
  __type?: "GetGroupVersionRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
   */
  GroupVersionId: string | undefined;
}

export namespace GetGroupVersionRequest {
  export const isa = (o: any): o is GetGroupVersionRequest =>
    __isa(o, "GetGroupVersionRequest");
}

export interface GetGroupVersionResponse {
  __type?: "GetGroupVersionResponse";
  /**
   * The ARN of the group version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the group version definition.
   */
  Definition?: GroupVersion;

  /**
   * The ID of the group that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the group version.
   */
  Version?: string;
}

export namespace GetGroupVersionResponse {
  export const isa = (o: any): o is GetGroupVersionResponse =>
    __isa(o, "GetGroupVersionResponse");
}

export interface GetLoggerDefinitionRequest {
  __type?: "GetLoggerDefinitionRequest";
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

export namespace GetLoggerDefinitionRequest {
  export const isa = (o: any): o is GetLoggerDefinitionRequest =>
    __isa(o, "GetLoggerDefinitionRequest");
}

export interface GetLoggerDefinitionResponse {
  __type?: "GetLoggerDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetLoggerDefinitionResponse {
  export const isa = (o: any): o is GetLoggerDefinitionResponse =>
    __isa(o, "GetLoggerDefinitionResponse");
}

export interface GetLoggerDefinitionVersionRequest {
  __type?: "GetLoggerDefinitionVersionRequest";
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  LoggerDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace GetLoggerDefinitionVersionRequest {
  export const isa = (o: any): o is GetLoggerDefinitionVersionRequest =>
    __isa(o, "GetLoggerDefinitionVersionRequest");
}

export interface GetLoggerDefinitionVersionResponse {
  __type?: "GetLoggerDefinitionVersionResponse";
  /**
   * The ARN of the logger definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the logger definition version.
   */
  Definition?: LoggerDefinitionVersion;

  /**
   * The ID of the logger definition version.
   */
  Id?: string;

  /**
   * The version of the logger definition version.
   */
  Version?: string;
}

export namespace GetLoggerDefinitionVersionResponse {
  export const isa = (o: any): o is GetLoggerDefinitionVersionResponse =>
    __isa(o, "GetLoggerDefinitionVersionResponse");
}

export interface GetResourceDefinitionRequest {
  __type?: "GetResourceDefinitionRequest";
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace GetResourceDefinitionRequest {
  export const isa = (o: any): o is GetResourceDefinitionRequest =>
    __isa(o, "GetResourceDefinitionRequest");
}

export interface GetResourceDefinitionResponse {
  __type?: "GetResourceDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetResourceDefinitionResponse {
  export const isa = (o: any): o is GetResourceDefinitionResponse =>
    __isa(o, "GetResourceDefinitionResponse");
}

export interface GetResourceDefinitionVersionRequest {
  __type?: "GetResourceDefinitionVersionRequest";
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ResourceDefinitionVersionId: string | undefined;
}

export namespace GetResourceDefinitionVersionRequest {
  export const isa = (o: any): o is GetResourceDefinitionVersionRequest =>
    __isa(o, "GetResourceDefinitionVersionRequest");
}

export interface GetResourceDefinitionVersionResponse {
  __type?: "GetResourceDefinitionVersionResponse";
  /**
   * Arn of the resource definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the definition.
   */
  Definition?: ResourceDefinitionVersion;

  /**
   * The ID of the resource definition version.
   */
  Id?: string;

  /**
   * The version of the resource definition version.
   */
  Version?: string;
}

export namespace GetResourceDefinitionVersionResponse {
  export const isa = (o: any): o is GetResourceDefinitionVersionResponse =>
    __isa(o, "GetResourceDefinitionVersionResponse");
}

export interface GetServiceRoleForAccountRequest {
  __type?: "GetServiceRoleForAccountRequest";
}

export namespace GetServiceRoleForAccountRequest {
  export const isa = (o: any): o is GetServiceRoleForAccountRequest =>
    __isa(o, "GetServiceRoleForAccountRequest");
}

export interface GetServiceRoleForAccountResponse {
  __type?: "GetServiceRoleForAccountResponse";
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role which is associated with the account.
   */
  RoleArn?: string;
}

export namespace GetServiceRoleForAccountResponse {
  export const isa = (o: any): o is GetServiceRoleForAccountResponse =>
    __isa(o, "GetServiceRoleForAccountResponse");
}

export interface GetSubscriptionDefinitionRequest {
  __type?: "GetSubscriptionDefinitionRequest";
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace GetSubscriptionDefinitionRequest {
  export const isa = (o: any): o is GetSubscriptionDefinitionRequest =>
    __isa(o, "GetSubscriptionDefinitionRequest");
}

export interface GetSubscriptionDefinitionResponse {
  __type?: "GetSubscriptionDefinitionResponse";
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };
}

export namespace GetSubscriptionDefinitionResponse {
  export const isa = (o: any): o is GetSubscriptionDefinitionResponse =>
    __isa(o, "GetSubscriptionDefinitionResponse");
}

export interface GetSubscriptionDefinitionVersionRequest {
  __type?: "GetSubscriptionDefinitionVersionRequest";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  SubscriptionDefinitionVersionId: string | undefined;
}

export namespace GetSubscriptionDefinitionVersionRequest {
  export const isa = (o: any): o is GetSubscriptionDefinitionVersionRequest =>
    __isa(o, "GetSubscriptionDefinitionVersionRequest");
}

export interface GetSubscriptionDefinitionVersionResponse {
  __type?: "GetSubscriptionDefinitionVersionResponse";
  /**
   * The ARN of the subscription definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the subscription definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the subscription definition version.
   */
  Definition?: SubscriptionDefinitionVersion;

  /**
   * The ID of the subscription definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the subscription definition version.
   */
  Version?: string;
}

export namespace GetSubscriptionDefinitionVersionResponse {
  export const isa = (o: any): o is GetSubscriptionDefinitionVersionResponse =>
    __isa(o, "GetSubscriptionDefinitionVersionResponse");
}

/**
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
  __type?: "GroupCertificateAuthorityProperties";
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;
}

export namespace GroupCertificateAuthorityProperties {
  export const isa = (o: any): o is GroupCertificateAuthorityProperties =>
    __isa(o, "GroupCertificateAuthorityProperties");
}

/**
 * Information about a group.
 */
export interface GroupInformation {
  __type?: "GroupInformation";
  /**
   * The ARN of the group.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the group.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the group.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the group.
   */
  LatestVersionArn?: string;

  /**
   * The name of the group.
   */
  Name?: string;
}

export namespace GroupInformation {
  export const isa = (o: any): o is GroupInformation =>
    __isa(o, "GroupInformation");
}

/**
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
  __type?: "GroupOwnerSetting";
  /**
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   */
  AutoAddGroupOwner?: boolean;

  /**
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   */
  GroupOwner?: string;
}

export namespace GroupOwnerSetting {
  export const isa = (o: any): o is GroupOwnerSetting =>
    __isa(o, "GroupOwnerSetting");
}

/**
 * Information about a group version.
 */
export interface GroupVersion {
  __type?: "GroupVersion";
  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

export namespace GroupVersion {
  export const isa = (o: any): o is GroupVersion => __isa(o, "GroupVersion");
}

/**
 * General error information.
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

export interface ListBulkDeploymentDetailedReportsRequest {
  __type?: "ListBulkDeploymentDetailedReportsRequest";
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentDetailedReportsRequest {
  export const isa = (o: any): o is ListBulkDeploymentDetailedReportsRequest =>
    __isa(o, "ListBulkDeploymentDetailedReportsRequest");
}

export interface ListBulkDeploymentDetailedReportsResponse {
  __type?: "ListBulkDeploymentDetailedReportsResponse";
  /**
   * A list of the individual group deployments in the bulk deployment operation.
   */
  Deployments?: BulkDeploymentResult[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentDetailedReportsResponse {
  export const isa = (o: any): o is ListBulkDeploymentDetailedReportsResponse =>
    __isa(o, "ListBulkDeploymentDetailedReportsResponse");
}

export interface ListBulkDeploymentsRequest {
  __type?: "ListBulkDeploymentsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentsRequest {
  export const isa = (o: any): o is ListBulkDeploymentsRequest =>
    __isa(o, "ListBulkDeploymentsRequest");
}

export interface ListBulkDeploymentsResponse {
  __type?: "ListBulkDeploymentsResponse";
  /**
   * A list of bulk deployments.
   */
  BulkDeployments?: BulkDeployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListBulkDeploymentsResponse {
  export const isa = (o: any): o is ListBulkDeploymentsResponse =>
    __isa(o, "ListBulkDeploymentsResponse");
}

export interface ListConnectorDefinitionVersionsRequest {
  __type?: "ListConnectorDefinitionVersionsRequest";
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionVersionsRequest {
  export const isa = (o: any): o is ListConnectorDefinitionVersionsRequest =>
    __isa(o, "ListConnectorDefinitionVersionsRequest");
}

export interface ListConnectorDefinitionVersionsResponse {
  __type?: "ListConnectorDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListConnectorDefinitionVersionsResponse {
  export const isa = (o: any): o is ListConnectorDefinitionVersionsResponse =>
    __isa(o, "ListConnectorDefinitionVersionsResponse");
}

export interface ListConnectorDefinitionsRequest {
  __type?: "ListConnectorDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionsRequest {
  export const isa = (o: any): o is ListConnectorDefinitionsRequest =>
    __isa(o, "ListConnectorDefinitionsRequest");
}

export interface ListConnectorDefinitionsResponse {
  __type?: "ListConnectorDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListConnectorDefinitionsResponse {
  export const isa = (o: any): o is ListConnectorDefinitionsResponse =>
    __isa(o, "ListConnectorDefinitionsResponse");
}

export interface ListCoreDefinitionVersionsRequest {
  __type?: "ListCoreDefinitionVersionsRequest";
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionVersionsRequest {
  export const isa = (o: any): o is ListCoreDefinitionVersionsRequest =>
    __isa(o, "ListCoreDefinitionVersionsRequest");
}

export interface ListCoreDefinitionVersionsResponse {
  __type?: "ListCoreDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListCoreDefinitionVersionsResponse {
  export const isa = (o: any): o is ListCoreDefinitionVersionsResponse =>
    __isa(o, "ListCoreDefinitionVersionsResponse");
}

export interface ListCoreDefinitionsRequest {
  __type?: "ListCoreDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionsRequest {
  export const isa = (o: any): o is ListCoreDefinitionsRequest =>
    __isa(o, "ListCoreDefinitionsRequest");
}

export interface ListCoreDefinitionsResponse {
  __type?: "ListCoreDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListCoreDefinitionsResponse {
  export const isa = (o: any): o is ListCoreDefinitionsResponse =>
    __isa(o, "ListCoreDefinitionsResponse");
}

export interface ListDeploymentsRequest {
  __type?: "ListDeploymentsRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeploymentsRequest {
  export const isa = (o: any): o is ListDeploymentsRequest =>
    __isa(o, "ListDeploymentsRequest");
}

export interface ListDeploymentsResponse {
  __type?: "ListDeploymentsResponse";
  /**
   * A list of deployments for the requested groups.
   */
  Deployments?: Deployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeploymentsResponse {
  export const isa = (o: any): o is ListDeploymentsResponse =>
    __isa(o, "ListDeploymentsResponse");
}

export interface ListDeviceDefinitionVersionsRequest {
  __type?: "ListDeviceDefinitionVersionsRequest";
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionVersionsRequest {
  export const isa = (o: any): o is ListDeviceDefinitionVersionsRequest =>
    __isa(o, "ListDeviceDefinitionVersionsRequest");
}

export interface ListDeviceDefinitionVersionsResponse {
  __type?: "ListDeviceDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListDeviceDefinitionVersionsResponse {
  export const isa = (o: any): o is ListDeviceDefinitionVersionsResponse =>
    __isa(o, "ListDeviceDefinitionVersionsResponse");
}

export interface ListDeviceDefinitionsRequest {
  __type?: "ListDeviceDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionsRequest {
  export const isa = (o: any): o is ListDeviceDefinitionsRequest =>
    __isa(o, "ListDeviceDefinitionsRequest");
}

export interface ListDeviceDefinitionsResponse {
  __type?: "ListDeviceDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListDeviceDefinitionsResponse {
  export const isa = (o: any): o is ListDeviceDefinitionsResponse =>
    __isa(o, "ListDeviceDefinitionsResponse");
}

export interface ListFunctionDefinitionVersionsRequest {
  __type?: "ListFunctionDefinitionVersionsRequest";
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionVersionsRequest {
  export const isa = (o: any): o is ListFunctionDefinitionVersionsRequest =>
    __isa(o, "ListFunctionDefinitionVersionsRequest");
}

export interface ListFunctionDefinitionVersionsResponse {
  __type?: "ListFunctionDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListFunctionDefinitionVersionsResponse {
  export const isa = (o: any): o is ListFunctionDefinitionVersionsResponse =>
    __isa(o, "ListFunctionDefinitionVersionsResponse");
}

export interface ListFunctionDefinitionsRequest {
  __type?: "ListFunctionDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionsRequest {
  export const isa = (o: any): o is ListFunctionDefinitionsRequest =>
    __isa(o, "ListFunctionDefinitionsRequest");
}

export interface ListFunctionDefinitionsResponse {
  __type?: "ListFunctionDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListFunctionDefinitionsResponse {
  export const isa = (o: any): o is ListFunctionDefinitionsResponse =>
    __isa(o, "ListFunctionDefinitionsResponse");
}

export interface ListGroupCertificateAuthoritiesRequest {
  __type?: "ListGroupCertificateAuthoritiesRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace ListGroupCertificateAuthoritiesRequest {
  export const isa = (o: any): o is ListGroupCertificateAuthoritiesRequest =>
    __isa(o, "ListGroupCertificateAuthoritiesRequest");
}

export interface ListGroupCertificateAuthoritiesResponse {
  __type?: "ListGroupCertificateAuthoritiesResponse";
  /**
   * A list of certificate authorities associated with the group.
   */
  GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}

export namespace ListGroupCertificateAuthoritiesResponse {
  export const isa = (o: any): o is ListGroupCertificateAuthoritiesResponse =>
    __isa(o, "ListGroupCertificateAuthoritiesResponse");
}

export interface ListGroupVersionsRequest {
  __type?: "ListGroupVersionsRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupVersionsRequest {
  export const isa = (o: any): o is ListGroupVersionsRequest =>
    __isa(o, "ListGroupVersionsRequest");
}

export interface ListGroupVersionsResponse {
  __type?: "ListGroupVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListGroupVersionsResponse {
  export const isa = (o: any): o is ListGroupVersionsResponse =>
    __isa(o, "ListGroupVersionsResponse");
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupsRequest {
  export const isa = (o: any): o is ListGroupsRequest =>
    __isa(o, "ListGroupsRequest");
}

export interface ListGroupsResponse {
  __type?: "ListGroupsResponse";
  /**
   * Information about a group.
   */
  Groups?: GroupInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListGroupsResponse {
  export const isa = (o: any): o is ListGroupsResponse =>
    __isa(o, "ListGroupsResponse");
}

export interface ListLoggerDefinitionVersionsRequest {
  __type?: "ListLoggerDefinitionVersionsRequest";
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionVersionsRequest {
  export const isa = (o: any): o is ListLoggerDefinitionVersionsRequest =>
    __isa(o, "ListLoggerDefinitionVersionsRequest");
}

export interface ListLoggerDefinitionVersionsResponse {
  __type?: "ListLoggerDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListLoggerDefinitionVersionsResponse {
  export const isa = (o: any): o is ListLoggerDefinitionVersionsResponse =>
    __isa(o, "ListLoggerDefinitionVersionsResponse");
}

export interface ListLoggerDefinitionsRequest {
  __type?: "ListLoggerDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionsRequest {
  export const isa = (o: any): o is ListLoggerDefinitionsRequest =>
    __isa(o, "ListLoggerDefinitionsRequest");
}

export interface ListLoggerDefinitionsResponse {
  __type?: "ListLoggerDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListLoggerDefinitionsResponse {
  export const isa = (o: any): o is ListLoggerDefinitionsResponse =>
    __isa(o, "ListLoggerDefinitionsResponse");
}

export interface ListResourceDefinitionVersionsRequest {
  __type?: "ListResourceDefinitionVersionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace ListResourceDefinitionVersionsRequest {
  export const isa = (o: any): o is ListResourceDefinitionVersionsRequest =>
    __isa(o, "ListResourceDefinitionVersionsRequest");
}

export interface ListResourceDefinitionVersionsResponse {
  __type?: "ListResourceDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListResourceDefinitionVersionsResponse {
  export const isa = (o: any): o is ListResourceDefinitionVersionsResponse =>
    __isa(o, "ListResourceDefinitionVersionsResponse");
}

export interface ListResourceDefinitionsRequest {
  __type?: "ListResourceDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListResourceDefinitionsRequest {
  export const isa = (o: any): o is ListResourceDefinitionsRequest =>
    __isa(o, "ListResourceDefinitionsRequest");
}

export interface ListResourceDefinitionsResponse {
  __type?: "ListResourceDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListResourceDefinitionsResponse {
  export const isa = (o: any): o is ListResourceDefinitionsResponse =>
    __isa(o, "ListResourceDefinitionsResponse");
}

export interface ListSubscriptionDefinitionVersionsRequest {
  __type?: "ListSubscriptionDefinitionVersionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace ListSubscriptionDefinitionVersionsRequest {
  export const isa = (o: any): o is ListSubscriptionDefinitionVersionsRequest =>
    __isa(o, "ListSubscriptionDefinitionVersionsRequest");
}

export interface ListSubscriptionDefinitionVersionsResponse {
  __type?: "ListSubscriptionDefinitionVersionsResponse";
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

export namespace ListSubscriptionDefinitionVersionsResponse {
  export const isa = (
    o: any
  ): o is ListSubscriptionDefinitionVersionsResponse =>
    __isa(o, "ListSubscriptionDefinitionVersionsResponse");
}

export interface ListSubscriptionDefinitionsRequest {
  __type?: "ListSubscriptionDefinitionsRequest";
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListSubscriptionDefinitionsRequest {
  export const isa = (o: any): o is ListSubscriptionDefinitionsRequest =>
    __isa(o, "ListSubscriptionDefinitionsRequest");
}

export interface ListSubscriptionDefinitionsResponse {
  __type?: "ListSubscriptionDefinitionsResponse";
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

export namespace ListSubscriptionDefinitionsResponse {
  export const isa = (o: any): o is ListSubscriptionDefinitionsResponse =>
    __isa(o, "ListSubscriptionDefinitionsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * The key-value pair for the resource tag.
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

/**
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
  __type?: "LocalDeviceResourceData";
  /**
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   */
  SourcePath?: string;
}

export namespace LocalDeviceResourceData {
  export const isa = (o: any): o is LocalDeviceResourceData =>
    __isa(o, "LocalDeviceResourceData");
}

/**
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
  __type?: "LocalVolumeResourceData";
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   */
  SourcePath?: string;
}

export namespace LocalVolumeResourceData {
  export const isa = (o: any): o is LocalVolumeResourceData =>
    __isa(o, "LocalVolumeResourceData");
}

/**
 * Information about a logger
 */
export interface Logger {
  __type?: "Logger";
  /**
   * The component that will be subject to logging.
   */
  Component: LoggerComponent | string | undefined;

  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The level of the logs.
   */
  Level: LoggerLevel | string | undefined;

  /**
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   */
  Space?: number;

  /**
   * The type of log output which will be used.
   */
  Type: LoggerType | string | undefined;
}

export namespace Logger {
  export const isa = (o: any): o is Logger => __isa(o, "Logger");
}

export enum LoggerComponent {
  GreengrassSystem = "GreengrassSystem",
  Lambda = "Lambda"
}

/**
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
  __type?: "LoggerDefinitionVersion";
  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

export namespace LoggerDefinitionVersion {
  export const isa = (o: any): o is LoggerDefinitionVersion =>
    __isa(o, "LoggerDefinitionVersion");
}

export enum LoggerLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  WARN = "WARN"
}

export enum LoggerType {
  AWSCloudWatch = "AWSCloudWatch",
  FileSystem = "FileSystem"
}

export enum Permission {
  ro = "ro",
  rw = "rw"
}

/**
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
  __type?: "ResetDeploymentsRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * If true, performs a best-effort only core reset.
   */
  Force?: boolean;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace ResetDeploymentsRequest {
  export const isa = (o: any): o is ResetDeploymentsRequest =>
    __isa(o, "ResetDeploymentsRequest");
}

export interface ResetDeploymentsResponse {
  __type?: "ResetDeploymentsResponse";
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

export namespace ResetDeploymentsResponse {
  export const isa = (o: any): o is ResetDeploymentsResponse =>
    __isa(o, "ResetDeploymentsResponse");
}

/**
 * Information about a resource.
 */
export interface Resource {
  __type?: "Resource";
  /**
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Id: string | undefined;

  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Name: string | undefined;

  /**
   * A container of data for all resource types.
   */
  ResourceDataContainer: ResourceDataContainer | undefined;
}

export namespace Resource {
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
  __type?: "ResourceAccessPolicy";
  /**
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   */
  Permission?: Permission | string;

  /**
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   */
  ResourceId: string | undefined;
}

export namespace ResourceAccessPolicy {
  export const isa = (o: any): o is ResourceAccessPolicy =>
    __isa(o, "ResourceAccessPolicy");
}

/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
  __type?: "ResourceDataContainer";
  /**
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: LocalDeviceResourceData;

  /**
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: LocalVolumeResourceData;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}

export namespace ResourceDataContainer {
  export const isa = (o: any): o is ResourceDataContainer =>
    __isa(o, "ResourceDataContainer");
}

/**
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
  __type?: "ResourceDefinitionVersion";
  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

export namespace ResourceDefinitionVersion {
  export const isa = (o: any): o is ResourceDefinitionVersion =>
    __isa(o, "ResourceDefinitionVersion");
}

/**
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
  __type?: "ResourceDownloadOwnerSetting";
  /**
   * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
   */
  GroupOwner: string | undefined;

  /**
   * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
   */
  GroupPermission: Permission | string | undefined;
}

export namespace ResourceDownloadOwnerSetting {
  export const isa = (o: any): o is ResourceDownloadOwnerSetting =>
    __isa(o, "ResourceDownloadOwnerSetting");
}

/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
  __type?: "S3MachineLearningModelResourceData";
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   */
  S3Uri?: string;
}

export namespace S3MachineLearningModelResourceData {
  export const isa = (o: any): o is S3MachineLearningModelResourceData =>
    __isa(o, "S3MachineLearningModelResourceData");
}

/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
  __type?: "SageMakerMachineLearningModelResourceData";
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The ARN of the Amazon SageMaker training job that represents the source model.
   */
  SageMakerJobArn?: string;
}

export namespace SageMakerMachineLearningModelResourceData {
  export const isa = (o: any): o is SageMakerMachineLearningModelResourceData =>
    __isa(o, "SageMakerMachineLearningModelResourceData");
}

/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
  __type?: "SecretsManagerSecretResourceData";
  /**
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   */
  ARN?: string;

  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: string[];
}

export namespace SecretsManagerSecretResourceData {
  export const isa = (o: any): o is SecretsManagerSecretResourceData =>
    __isa(o, "SecretsManagerSecretResourceData");
}

export enum SoftwareToUpdate {
  core = "core",
  ota_agent = "ota_agent"
}

export interface StartBulkDeploymentRequest {
  __type?: "StartBulkDeploymentRequest";
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
   */
  InputFileUri: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: { [key: string]: string };
}

export namespace StartBulkDeploymentRequest {
  export const isa = (o: any): o is StartBulkDeploymentRequest =>
    __isa(o, "StartBulkDeploymentRequest");
}

export interface StartBulkDeploymentResponse {
  __type?: "StartBulkDeploymentResponse";
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;
}

export namespace StartBulkDeploymentResponse {
  export const isa = (o: any): o is StartBulkDeploymentResponse =>
    __isa(o, "StartBulkDeploymentResponse");
}

export interface StopBulkDeploymentRequest {
  __type?: "StopBulkDeploymentRequest";
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

export namespace StopBulkDeploymentRequest {
  export const isa = (o: any): o is StopBulkDeploymentRequest =>
    __isa(o, "StopBulkDeploymentRequest");
}

export interface StopBulkDeploymentResponse {
  __type?: "StopBulkDeploymentResponse";
}

export namespace StopBulkDeploymentResponse {
  export const isa = (o: any): o is StopBulkDeploymentResponse =>
    __isa(o, "StopBulkDeploymentResponse");
}

/**
 * Information about a subscription.
 */
export interface Subscription {
  __type?: "Subscription";
  /**
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Source: string | undefined;

  /**
   * The MQTT topic used to route the message.
   */
  Subject: string | undefined;

  /**
   * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Target: string | undefined;
}

export namespace Subscription {
  export const isa = (o: any): o is Subscription => __isa(o, "Subscription");
}

/**
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
  __type?: "SubscriptionDefinitionVersion";
  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

export namespace SubscriptionDefinitionVersion {
  export const isa = (o: any): o is SubscriptionDefinitionVersion =>
    __isa(o, "SubscriptionDefinitionVersion");
}

/**
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   */
  tags?: { [key: string]: string };
}

export namespace TagResourceRequest {
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export enum UpdateAgentLogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  NONE = "NONE",
  TRACE = "TRACE",
  VERBOSE = "VERBOSE",
  WARN = "WARN"
}

/**
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
  __type?: "UpdateConnectivityInfoRequest";
  /**
   * A list of connectivity info.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

export namespace UpdateConnectivityInfoRequest {
  export const isa = (o: any): o is UpdateConnectivityInfoRequest =>
    __isa(o, "UpdateConnectivityInfoRequest");
}

export interface UpdateConnectivityInfoResponse {
  __type?: "UpdateConnectivityInfoResponse";
  /**
   * A message about the connectivity info update request.
   */
  Message?: string;

  /**
   * The new version of the connectivity info.
   */
  Version?: string;
}

export namespace UpdateConnectivityInfoResponse {
  export const isa = (o: any): o is UpdateConnectivityInfoResponse =>
    __isa(o, "UpdateConnectivityInfoResponse");
}

export interface UpdateConnectorDefinitionRequest {
  __type?: "UpdateConnectorDefinitionRequest";
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateConnectorDefinitionRequest {
  export const isa = (o: any): o is UpdateConnectorDefinitionRequest =>
    __isa(o, "UpdateConnectorDefinitionRequest");
}

export interface UpdateConnectorDefinitionResponse {
  __type?: "UpdateConnectorDefinitionResponse";
}

export namespace UpdateConnectorDefinitionResponse {
  export const isa = (o: any): o is UpdateConnectorDefinitionResponse =>
    __isa(o, "UpdateConnectorDefinitionResponse");
}

export interface UpdateCoreDefinitionRequest {
  __type?: "UpdateCoreDefinitionRequest";
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateCoreDefinitionRequest {
  export const isa = (o: any): o is UpdateCoreDefinitionRequest =>
    __isa(o, "UpdateCoreDefinitionRequest");
}

export interface UpdateCoreDefinitionResponse {
  __type?: "UpdateCoreDefinitionResponse";
}

export namespace UpdateCoreDefinitionResponse {
  export const isa = (o: any): o is UpdateCoreDefinitionResponse =>
    __isa(o, "UpdateCoreDefinitionResponse");
}

export interface UpdateDeviceDefinitionRequest {
  __type?: "UpdateDeviceDefinitionRequest";
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateDeviceDefinitionRequest {
  export const isa = (o: any): o is UpdateDeviceDefinitionRequest =>
    __isa(o, "UpdateDeviceDefinitionRequest");
}

export interface UpdateDeviceDefinitionResponse {
  __type?: "UpdateDeviceDefinitionResponse";
}

export namespace UpdateDeviceDefinitionResponse {
  export const isa = (o: any): o is UpdateDeviceDefinitionResponse =>
    __isa(o, "UpdateDeviceDefinitionResponse");
}

export interface UpdateFunctionDefinitionRequest {
  __type?: "UpdateFunctionDefinitionRequest";
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateFunctionDefinitionRequest {
  export const isa = (o: any): o is UpdateFunctionDefinitionRequest =>
    __isa(o, "UpdateFunctionDefinitionRequest");
}

export interface UpdateFunctionDefinitionResponse {
  __type?: "UpdateFunctionDefinitionResponse";
}

export namespace UpdateFunctionDefinitionResponse {
  export const isa = (o: any): o is UpdateFunctionDefinitionResponse =>
    __isa(o, "UpdateFunctionDefinitionResponse");
}

export interface UpdateGroupCertificateConfigurationRequest {
  __type?: "UpdateGroupCertificateConfigurationRequest";
  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

export namespace UpdateGroupCertificateConfigurationRequest {
  export const isa = (
    o: any
  ): o is UpdateGroupCertificateConfigurationRequest =>
    __isa(o, "UpdateGroupCertificateConfigurationRequest");
}

export interface UpdateGroupCertificateConfigurationResponse {
  __type?: "UpdateGroupCertificateConfigurationResponse";
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

export namespace UpdateGroupCertificateConfigurationResponse {
  export const isa = (
    o: any
  ): o is UpdateGroupCertificateConfigurationResponse =>
    __isa(o, "UpdateGroupCertificateConfigurationResponse");
}

export interface UpdateGroupRequest {
  __type?: "UpdateGroupRequest";
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateGroupRequest {
  export const isa = (o: any): o is UpdateGroupRequest =>
    __isa(o, "UpdateGroupRequest");
}

export interface UpdateGroupResponse {
  __type?: "UpdateGroupResponse";
}

export namespace UpdateGroupResponse {
  export const isa = (o: any): o is UpdateGroupResponse =>
    __isa(o, "UpdateGroupResponse");
}

export interface UpdateLoggerDefinitionRequest {
  __type?: "UpdateLoggerDefinitionRequest";
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

export namespace UpdateLoggerDefinitionRequest {
  export const isa = (o: any): o is UpdateLoggerDefinitionRequest =>
    __isa(o, "UpdateLoggerDefinitionRequest");
}

export interface UpdateLoggerDefinitionResponse {
  __type?: "UpdateLoggerDefinitionResponse";
}

export namespace UpdateLoggerDefinitionResponse {
  export const isa = (o: any): o is UpdateLoggerDefinitionResponse =>
    __isa(o, "UpdateLoggerDefinitionResponse");
}

export interface UpdateResourceDefinitionRequest {
  __type?: "UpdateResourceDefinitionRequest";
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

export namespace UpdateResourceDefinitionRequest {
  export const isa = (o: any): o is UpdateResourceDefinitionRequest =>
    __isa(o, "UpdateResourceDefinitionRequest");
}

export interface UpdateResourceDefinitionResponse {
  __type?: "UpdateResourceDefinitionResponse";
}

export namespace UpdateResourceDefinitionResponse {
  export const isa = (o: any): o is UpdateResourceDefinitionResponse =>
    __isa(o, "UpdateResourceDefinitionResponse");
}

export interface UpdateSubscriptionDefinitionRequest {
  __type?: "UpdateSubscriptionDefinitionRequest";
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

export namespace UpdateSubscriptionDefinitionRequest {
  export const isa = (o: any): o is UpdateSubscriptionDefinitionRequest =>
    __isa(o, "UpdateSubscriptionDefinitionRequest");
}

export interface UpdateSubscriptionDefinitionResponse {
  __type?: "UpdateSubscriptionDefinitionResponse";
}

export namespace UpdateSubscriptionDefinitionResponse {
  export const isa = (o: any): o is UpdateSubscriptionDefinitionResponse =>
    __isa(o, "UpdateSubscriptionDefinitionResponse");
}

export enum UpdateTargetsArchitecture {
  aarch64 = "aarch64",
  armv6l = "armv6l",
  armv7l = "armv7l",
  x86_64 = "x86_64"
}

export enum UpdateTargetsOperatingSystem {
  amazon_linux = "amazon_linux",
  openwrt = "openwrt",
  raspbian = "raspbian",
  ubuntu = "ubuntu"
}

/**
 * Information about a version.
 */
export interface VersionInformation {
  __type?: "VersionInformation";
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

export namespace VersionInformation {
  export const isa = (o: any): o is VersionInformation =>
    __isa(o, "VersionInformation");
}
