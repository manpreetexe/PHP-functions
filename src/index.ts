// String Functions
import { strlen, strrev, str_word_count, strpos, stripos, strrpos, strripos, substr, substr_replace, strcmp, strcasecmp, strncmp, strncasecmp } from "./function/string/stringBasic";
import { str_replace, str_ireplace, substr_count, strstr, stristr, strchr, strrchr, preg_replace, preg_replace_callback } from "./function/string/stringSearchingAndReplacing"
import { sprintf, vsprintf, printf, vprintf, sscanf, number_format } from "./function/string/stringFormatting"
import { strtoupper, strtolower, ucfirst, lcfirst, ucwords } from "./function/string/stringCaseConversion";
import { trim, ltrim, rtrim, str_pad, str_repeat, chop } from "./function/string/stringTrimmingAndPadding";
import { md5, sha1, crc32, base64_decode, base64_encode } from "./function/string/stringEncryptionAndEncoding";
import { explode, implode, join, str_split, chunk_split } from "./function/string/StringSplittingAndJoining";
import { preg_match, preg_match_all, preg_split, preg_grep, preg_quote } from "./function/string/regularExpression"
import { htmlentities, html_entity_decode, htmlspecialchars, htmlspecialchars_decode } from "./function/string/HTMLEntitiesAndSpecialCharacters";
import { addslashes, stripslashes, quotemeta, wordwrap, parse_str, soundex, similar_text, levenshtein, nl2br } from "./function/string/stringMiscellaneous";

// Array Functions
import { array, range } from "./function/array/arrayCreation"
import { count, sizeof, array_key_exists, array_values, array_replace, array_unique, array_filter, array_map, array_reduce, array_walk, array_chunk, array_splice, array_pad, array_flip, array_column, array_fill, array_fill_keys, array_count_values, array_merge_recursive, array_walk_recursive, array_replace_recursive, array_merge } from "./function/array/arrayInformation";
import { sort, asort, arsort, ksort, krsort, usort, uksort, natsort, natcasesort } from "./function/array/arraySorting"
import { array_combine, array_intersect, array_uintersect, array_diff, array_udiff, array_diff_assoc, array_diff_uassoc, array_intersect_key, array_diff_key, array_intersect_assoc, array_intersect_uassoc } from "./function/array/arrayCombination";
import { in_array, array_search, array_keys } from "./function/array/arraySearching";
import { array_rand, array_shift, array_unshift, array_pop, array_push, array_reverse, array_sum, array_product, array_slice } from "./function/array/arrayMiscellaneous"
import { json_encode, json_decode } from "./function/array/JSONOperations";

export {
  strlen, strrev, str_word_count, strpos, stripos, strrpos, strripos, substr, substr_replace, strcmp, strcasecmp, strncmp, strncasecmp,
  str_replace, str_ireplace, substr_count, strstr, stristr, strchr, strrchr, preg_replace, preg_replace_callback,
  sprintf, vsprintf, printf, vprintf, sscanf, number_format,
  strtoupper, strtolower, ucfirst, lcfirst, ucwords,
  trim, ltrim, rtrim, str_pad, str_repeat, chop,
  md5, sha1, crc32, base64_decode, base64_encode,
  explode, implode, join, str_split, chunk_split,
  preg_match, preg_match_all, preg_split, preg_grep, preg_quote,
  htmlentities, html_entity_decode, htmlspecialchars, htmlspecialchars_decode,
  addslashes, stripslashes, quotemeta, wordwrap, parse_str, soundex, similar_text, levenshtein, nl2br,
  array, range,
  count, sizeof, array_key_exists, array_values, array_replace, array_unique, array_filter, array_map, array_reduce, array_walk, array_chunk, array_splice, array_pad, array_flip, array_column, array_fill, array_fill_keys, array_count_values, array_merge_recursive, array_walk_recursive, array_replace_recursive, array_merge,
  sort, asort, arsort, ksort, krsort, usort, uksort, natsort, natcasesort,
  array_combine, array_intersect, array_uintersect, array_diff, array_udiff, array_diff_assoc, array_diff_uassoc, array_intersect_key, array_diff_key, array_intersect_assoc, array_intersect_uassoc,
  in_array, array_search, array_keys,
  array_rand, array_shift, array_unshift, array_pop, array_push, array_reverse, array_sum, array_product, array_slice,
  json_encode, json_decode 
}