import rjsmin

original_code = """
function hello() {
    // This is a comment
    var message = "KING_CODES WEBSITE ";
    console.log(message);
}
"""

minified_code = rjsmin.jsmin(original_code)
print(minified_code)s