const Lib = global.exports["tk-lib"].GetLib();
const Logger = Lib.Functions.Logger("n3-props", "Main")

function init() {
    Lib.Functions.VersionChecker(GetCurrentResourceName(), Lib.Functions.GetResourceVersion(GetCurrentResourceName()));
    Lib.Functions.EnsureResourceName(GetCurrentResourceName(), 'n3-props-free');
}

init()