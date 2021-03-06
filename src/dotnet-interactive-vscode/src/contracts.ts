// Generated TypeScript interfaces and types.

export const AddPackageType = "AddPackage";
export const CancelCurrentCommandType = "CancelCurrentCommand";
export const DisplayErrorType = "DisplayError";
export const DisplayValueType = "DisplayValue";
export const RequestCompletionType = "RequestCompletion";
export const RequestDiagnosticsType = "RequestDiagnostics";
export const RequestHoverTextType = "RequestHoverText";
export const SubmitCodeType = "SubmitCode";
export const UpdateDisplayedValueType = "UpdateDisplayedValue";

export type KernelCommandType =
      typeof AddPackageType
    | typeof CancelCurrentCommandType
    | typeof DisplayErrorType
    | typeof DisplayValueType
    | typeof RequestCompletionType
    | typeof RequestDiagnosticsType
    | typeof RequestHoverTextType
    | typeof SubmitCodeType
    | typeof UpdateDisplayedValueType;

export interface AddPackage extends KernelCommand {
    packageReference: PackageReference;
}

export interface KernelCommand {
    targetKernelName?: string;
}

export interface PackageReference {
    packageName: string;
    packageVersion: string;
    isPackageVersionSpecified: boolean;
}

export interface CancelCurrentCommand extends KernelCommand {
}

export interface DisplayError extends KernelCommand {
    message: string;
}

export interface DisplayValue extends KernelCommand {
    value: any;
    formattedValue: FormattedValue;
    valueId: string;
}

export interface FormattedValue {
    mimeType: string;
    value: string;
}

export interface RequestCompletion extends KernelCommand {
    code: string;
    position: LinePosition;
}

export interface LinePosition {
    line: number;
    character: number;
}

export interface RequestDiagnostics extends KernelCommand {
}

export interface RequestHoverText extends KernelCommand {
    code: string;
    position: LinePosition;
}

export interface SubmitCode extends KernelCommand {
    code: string;
    submissionType?: SubmissionType;
}

export enum SubmissionType {
    Run = 0,
    Diagnose = 1,
}

export interface UpdateDisplayedValue extends KernelCommand {
    value: any;
    formattedValue: FormattedValue;
    valueId: string;
}

export const CodeSubmissionReceivedType = "CodeSubmissionReceived";
export const CommandFailedType = "CommandFailed";
export const CommandHandledType = "CommandHandled";
export const CompleteCodeSubmissionReceivedType = "CompleteCodeSubmissionReceived";
export const CompletionRequestCompletedType = "CompletionRequestCompleted";
export const CompletionRequestReceivedType = "CompletionRequestReceived";
export const DiagnosticLogEntryProducedType = "DiagnosticLogEntryProduced";
export const DisplayedValueProducedType = "DisplayedValueProduced";
export const DisplayedValueUpdatedType = "DisplayedValueUpdated";
export const ErrorProducedType = "ErrorProduced";
export const HoverTextProducedType = "HoverTextProduced";
export const IncompleteCodeSubmissionReceivedType = "IncompleteCodeSubmissionReceived";
export const InputRequestedType = "InputRequested";
export const PackageAddedType = "PackageAdded";
export const PasswordRequestedType = "PasswordRequested";
export const ReturnValueProducedType = "ReturnValueProduced";
export const StandardErrorValueProducedType = "StandardErrorValueProduced";
export const StandardOutputValueProducedType = "StandardOutputValueProduced";

export type KernelEventType =
      typeof CodeSubmissionReceivedType
    | typeof CommandFailedType
    | typeof CommandHandledType
    | typeof CompleteCodeSubmissionReceivedType
    | typeof CompletionRequestCompletedType
    | typeof CompletionRequestReceivedType
    | typeof DiagnosticLogEntryProducedType
    | typeof DisplayedValueProducedType
    | typeof DisplayedValueUpdatedType
    | typeof ErrorProducedType
    | typeof HoverTextProducedType
    | typeof IncompleteCodeSubmissionReceivedType
    | typeof InputRequestedType
    | typeof PackageAddedType
    | typeof PasswordRequestedType
    | typeof ReturnValueProducedType
    | typeof StandardErrorValueProducedType
    | typeof StandardOutputValueProducedType;

export interface CodeSubmissionReceived extends KernelEvent {
    code: string;
}

export interface KernelEvent {
    command: KernelCommand;
}

export interface CommandFailed extends KernelEvent {
    message: string;
}

export interface CommandHandled extends KernelEvent {
}

export interface CompleteCodeSubmissionReceived extends KernelEvent {
    code: string;
}

export interface CompletionRequestCompleted extends KernelEvent {
    completionList: Array<CompletionItem>;
}

export interface CompletionItem {
    displayText: string;
    kind: string;
    filterText: string;
    sortText: string;
    insertText: string;
    documentation: string;
}

export interface CompletionRequestReceived extends KernelEvent {
}

export interface DiagnosticLogEntryProduced extends DiagnosticEventBase {
    message: string;
}

export interface DiagnosticEventBase extends KernelEvent {
}

export interface DisplayedValueProduced extends DisplayEventBase {
}

export interface DisplayEventBase extends KernelEvent {
    value: any;
    formattedValues: Array<FormattedValue>;
    valueId: string;
}

export interface DisplayedValueUpdated extends DisplayEventBase {
}

export interface ErrorProduced extends DisplayEventBase {
    message: string;
}

export interface HoverTextProduced extends KernelEvent {
    content: Array<FormattedValue>;
    range?: LinePositionSpan;
}

export interface LinePositionSpan {
    start: LinePosition;
    end: LinePosition;
}

export interface IncompleteCodeSubmissionReceived extends KernelEvent {
}

export interface InputRequested extends KernelEvent {
    prompt: string;
}

export interface PackageAdded extends KernelEvent {
    packageReference: ResolvedPackageReference;
}

export interface ResolvedPackageReference extends PackageReference {
    assemblyPaths: Array<string>;
    probingPaths: Array<string>;
    packageRoot: string;
}

export interface PasswordRequested extends KernelEvent {
    prompt: string;
}

export interface ReturnValueProduced extends DisplayEventBase {
}

export interface StandardErrorValueProduced extends DisplayEventBase {
}

export interface StandardOutputValueProduced extends DisplayEventBase {
}

export interface KernelEventEnvelope {
    eventType: KernelEventType;
    event: KernelEvent;
    command?: KernelCommandEnvelope;
}

export interface KernelCommandEnvelope {
    token?: string;
    commandType: KernelCommandType;
    command: KernelCommand;
}

export interface KernelEventEnvelopeObserver {
    (eventEnvelope: KernelEventEnvelope): void;
}

export interface Disposable {
    dispose(): void;
}

export interface DisposableSubscription extends Disposable {
}

export interface KernelTransport extends Disposable {
    subscribeToKernelEvents(observer: KernelEventEnvelopeObserver): DisposableSubscription;
    submitCommand(command: KernelCommand, commandType: KernelCommandType, token: string): Promise<void>;
}
