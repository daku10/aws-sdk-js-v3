import {getStringDeclaration} from "./getStringDeclaration";
import {ShapeMap, StructureMember} from "@aws/service-model";
import {
    GENERIC_STREAM_TYPE,
    OUTPUT_STRUCTURE_PREFIX,
} from '../../constants';

export function getMemberType(
    shape: string,
    shapeMap: ShapeMap,
    memberDef: StructureMember|undefined = {shape}
): string {
    const shapeDef = shapeMap[shape];
    switch (shapeDef.type) {
        case 'blob':
            const {streaming: shapeNormallyStreaming = false} = shapeDef;
            const {streaming = shapeNormallyStreaming} = memberDef;
            return streaming ? GENERIC_STREAM_TYPE : 'Uint8Array';
        case 'boolean':
            return 'boolean';
        case 'byte':
        case 'double':
        case 'float':
        case 'integer':
        case 'long':
        case 'short':
            return 'number';
        case 'character':
            return 'string';
        case 'list':
            return `Array<${getMemberType(shapeDef.member.shape, shapeMap)}>`;
        case 'map':
            const keyType = getMemberType(shapeDef.key.shape, shapeMap);
            const valueType = getMemberType(shapeDef.value.shape, shapeMap);
            return `{[key in ${keyType}]: ${valueType}}`;
        case 'string':
            return getStringDeclaration(shapeDef);
        case 'timestamp':
            return 'Date';
        case 'structure':
            return `${OUTPUT_STRUCTURE_PREFIX}${shape}`;
    }
}
