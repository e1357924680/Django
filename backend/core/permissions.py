from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdmin(BasePermission):
    """
    Only admin users (i.e. request.user.is_staff) are allowed to perform non-read actions.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_staff

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_staff


class IsCommentOwnerOrAdmin(BasePermission):
    """
    Object-level permission for comments:
    - Any user can view comments.
    - For update and delete, only the comment's owner or an admin is allowed.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author and (obj.author.id == request.user.id or request.user.is_staff)
